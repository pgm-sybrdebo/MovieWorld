import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';


(async () => {
  // Get all movies
  let moviesRef = db.collection('movies');
  const queryMovie = moviesRef.orderBy('createdAt', 'desc');
  const querySnapshotMovies = await queryMovie.get();
  const movies = querySnapshotMovies.docs.map((doc) => {
    return {
      uid: doc.id,
      ...doc.data()
    }
  });
  // Get all profiles
  let profilesRef = db.collection('profiles');
  const query = profilesRef.orderBy('createdAt', 'desc');
  const querySnapshot = await query.get();
  const profiles = querySnapshot.docs.map((doc) => {
    return {
      uid: doc.id,
      ...doc.data()
    }
  });

  profiles.forEach(profile => {
    let reviewsRef = db.collection('profiles').doc(profile.uid).collection('reviews');
    // Make reviews
    let numReviews = generateValueBetweenMinAndMax(0, 100), moviesCopy = JSON.parse(JSON.stringify(movies)), sumRatings = 0, movieStart = null, rating = 0, movieId = 0;
    for (let i = 0; i < numReviews;i++) {
      movieStart = generateValueBetweenMinAndMax(0, moviesCopy.length - 1);
      movieId = moviesCopy.slice(movieStart, movieStart + 1)[0].uid;

      rating = generateValueBetweenMinAndMax(0, 100);
      reviewsRef.doc(movieId).set({
        movie_id: movieId,
        review: faker.lorem.paragraphs(generateValueBetweenMinAndMax(1, 5)),
        rating: rating,
        ...generateTimestamps()
      });
      sumRatings += rating;
    }

    profilesRef.doc(profile.uid).update({
      numReviews: numReviews,
      avgRating: sumRatings/numReviews,
      modifiedAt: Date.now(),
    });  
  });
  
})();