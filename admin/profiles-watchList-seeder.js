import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import { v4 as uuidv4 } from 'uuid';



(async () => {
  // Get all movies
  let moviesRef = db.collection('movies');
  const queryMovie = moviesRef.orderBy('createdAt', 'desc');
  const querySnapshotMovies = await queryMovie.get();
  const movies = querySnapshotMovies.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });

   // Get all tv-shows
   let tvShowsRef = db.collection('tv-shows');
   const queryTvShow = tvShowsRef.orderBy('createdAt', 'desc');
   const querySnapshotTvShows = await queryTvShow.get();
   const tvShows = querySnapshotTvShows.docs.map((doc) => {
     return {
       id: doc.id,
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
    let watchlistsRef = db.collection('profiles').doc(profile.uid).collection('watchlists');
    // Make watchlist items
    let numWatchListItems = generateValueBetweenMinAndMax(0, 10), moviesCopy = JSON.parse(JSON.stringify(movies)), movieStart = null, movieId = 0, tvShowsCopy=JSON.parse(JSON.stringify(tvShows)), tvShowStart = null, tvShowId = 0;
    for (let i = 0; i < numWatchListItems; i++) {
      if (Math.random() < 0.5) {
        movieStart = generateValueBetweenMinAndMax(0, moviesCopy.length - 1);
        movieId = moviesCopy.slice(movieStart, movieStart + 1)[0].id;
        watchlistsRef.doc(uuidv4()).set({
          movieId: movieId,
          ...generateTimestamps()
      });
      } else {
        tvShowStart = generateValueBetweenMinAndMax(0, tvShowsCopy.length - 1);
        tvShowId = tvShowsCopy.slice(tvShowStart, tvShowStart + 1)[0].id;
        watchlistsRef.doc(uuidv4()).set({
          tvShowId: tvShowId,
          ...generateTimestamps()
      });
      }
    }

    profilesRef.doc(profile.uid).update({
      numWatchListItems: numWatchListItems,
      modifiedAt: Date.now(),
    });  
  });
  
})();