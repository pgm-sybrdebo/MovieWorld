import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';


(async () => {
  // Get all users
  let users = await auth.listUsers(1000, undefined);

  // Get all discussions .collection('discussions')
  const moviesRef = db.collection('movies');
  const movies = await (await moviesRef.get()).docs.map(
    (doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
  });
  movies.forEach(movie => {

    let numDiscussions = generateValueBetweenMinAndMax(0, 3), usersCopy = JSON.parse(JSON.stringify(users.users)), userStart = null, userId = 0;
    const userIds = [];
    for (let i = 0; i < numDiscussions; i++) {
      userStart = generateValueBetweenMinAndMax(0, usersCopy.length - 1);
      userId = usersCopy.slice(userStart, userStart + 1)[0].uid;
      while (userIds.includes(userId)) {
        userStart = generateValueBetweenMinAndMax(0, usersCopy.length - 1);
        userId = usersCopy.slice(userStart, userStart + 1)[0].uid;
      }
      userIds.push(userId);
      moviesRef.doc(movie.id).collection('discussions').doc(userId).set(
        {
          title: faker.lorem.sentence(),
          discussion: faker.lorem.paragraphs(generateValueBetweenMinAndMax(1, 5)),
          ...generateTimestamps()
        }
      );
      // 85 % chance for a discussion on a discussion
      if (Math.random() < 0.85) {

        let numAnswers = generateValueBetweenMinAndMax(0, 3), usersCopy = JSON.parse(JSON.stringify(users.users)), userStart = null, userId2 = 0;
        for (let i = 0; i < numAnswers; i++) {
          userStart = generateValueBetweenMinAndMax(0, usersCopy.length - 1);
          userId2 = usersCopy.slice(userStart, userStart + 1)[0].uid;
          while (userIds.includes(userId2)) {
            userStart = generateValueBetweenMinAndMax(0, usersCopy.length - 1);
            userId2 = usersCopy.slice(userStart, userStart + 1)[0].uid;
          }
          userIds.push(userId2);

          moviesRef.doc(movie.id).collection('discussions').doc(userId).collection('discussions').doc(userId2).set(
            {
              discussion: faker.lorem.paragraphs(generateValueBetweenMinAndMax(1, 5)),
              ...generateTimestamps()
            }
          );

          // 45% for a discussion on a discussion
          if (Math.random() < 0.45) {
            moviesRef.doc(movie.id).collection('discussions').doc(users.users[0].uid).collection('discussions').doc(users.users[1].uid).collection('discussions').doc(users.users[1].uid).set(
              {
                discussion: faker.lorem.paragraphs(generateValueBetweenMinAndMax(1, 5)),
                ...generateTimestamps()
              }
            );
          }
        }
      }
    } 
  }); 
})();