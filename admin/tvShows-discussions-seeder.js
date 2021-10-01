import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';




(async () => {
  // Get all users
  let users = await auth.listUsers(1000, undefined);

  // Get all tv-shows
  let tvShowsRef = db.collection('tv-shows');
  const query = tvShowsRef.orderBy('createdAt', 'desc');
  const querySnapshot = await query.get();
  const tvShows = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });

  tvShows.forEach( async (tvShow) =>  {
    let discussionRef = db.collection('tv-shows').doc(tvShow.id).collection('discussions');
    // Make discussions
    let numDiscussion = generateValueBetweenMinAndMax(0, 5), usersCopy = JSON.parse(JSON.stringify(users.users)), sumRatings = 0, userStart = null, userId = 0;
    for (let i = 0; i < numDiscussion;i++) {
      userStart = generateValueBetweenMinAndMax(0, usersCopy.length - 1);
      userId = usersCopy.slice(userStart, userStart + 1)[0].uid;
      discussionRef.doc(userId).set({
        title: faker.lorem.sentence(),
        discussion: faker.lorem.paragraphs(generateValueBetweenMinAndMax(1, 5)),
        ...generateTimestamps()
      });
    }

    tvShowsRef.doc(tvShow.id).update({
      numDiscussion: numDiscussion,
      modifiedAt: Date.now(),
    });  
  });
})();


