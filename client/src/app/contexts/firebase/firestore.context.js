import React, { useContext } from 'react';
import 'firebase/firestore';


import { useFirebase } from './firebase.context';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getMovies = async () => {
    const query = db.collection('movies')
      .orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const movies = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });
    return movies;
  };

  const getUserById = async (userId) => {

    const docRef = db.collection('profiles').doc(userId);
    const doc = await docRef.get();

    if (!doc.exists) {
        throw new Error('Document does not exist!');
    }

    return {
      uid: doc.id,
      ...doc.data()
    }
  };


  const getProfileById = async (userId) => {
    const docRef = db.collection('profiles').doc(userId);
    const doc = await docRef.get();
    if (!doc.exists) {
        throw new Error('Document does not exist!');
    }

    return {
      uid: doc.id,
      ...doc.data()
    }
  };

  const getMovieById = async (movieId) => {
    const docRef = db.collection('movies').doc(movieId);
    const doc = await docRef.get();
    if (!doc.exists) {
        throw new Error('Document does not exist!');
    }

    return {
      uid: doc.id,
      ...doc.data()
    }
  };

  const getReviews = async (id, cat) => {
    const query = db.collection(cat).doc(id).collection('reviews');
    const querySnapshot = await query.get();
    const reviews = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return reviews;
  };


  const getDiscussions = async (id, cat='movies') => {
    const query = db.collection(cat).doc(id).collection('discussions');
    const querySnapshot = await query.get();
    const discussions = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return discussions;
  };

  const getDiscussionAnswers = async (id, discussionId, cat='movies') => {
    const query = db.collection(cat).doc(id).collection('discussions').doc(discussionId).collection('discussions');
    const querySnapshot = await query.get();
    const discussionsAnswers = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return discussionsAnswers;
  };

  const getDiscussionAnswersAnswers = async (id, discussionId, answerId, cat='movies') => {
    const query = db.collection(cat).doc(id).collection('discussions').doc(discussionId).collection('discussions').doc(answerId).collection('discussions');
    const querySnapshot = await query.get();
    const discussionsAnswersAnswers = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return discussionsAnswersAnswers;
  };

  const addReview = async (id, review, userId, cat) => {
    let reviewRef = db.collection(cat).doc(id).collection('reviews').doc(userId);
    const catRef = db.collection(cat).doc(id);

    return await db.runTransaction((transaction) => {
        return transaction.get(catRef).then((res) => {
            if (!res.exists) {
                throw new Error('Document does not exist!');
            }

            // Compute new number of reviews
            let newNumReviews = res.data().numReviews + 1;

            // Compute new average rating
            const oldRatingTotal = res.data().avgRating * res.data().numReviews;
            const newAvgRating = (oldRatingTotal + review.rating) / newNumReviews;

            // Commit to Firestore
            transaction.update(catRef, {
                numReviews: newNumReviews,
                avgRating: newAvgRating
            });
            transaction.set(reviewRef, review);
        });
    });
  };

  return (
    <FirestoreContext.Provider value={{getUserById, addReview , getProfileById, getMovieById, getMovies, getReviews, getDiscussions, getDiscussionAnswers,getDiscussionAnswersAnswers }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};
