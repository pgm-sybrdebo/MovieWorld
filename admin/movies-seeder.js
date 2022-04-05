import fetch from "node-fetch";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

import { admin, app, db, generateTimestamps } from "./firebase";
import firebase from "firebase";

const MOVIES_API = "https://api.themoviedb.org/3/discover/movie";

(async () => {
  // Get movies collection
  let collectionRef = db.collection("movies");

  // Create a Project
  const createMovie = (movie) => {
    // Add a document via movie object
    const data = {
      ...generateTimestamps(),
    };

    collectionRef
      .doc(movie.id.toString())
      .set(data)
      .then((documentReference) => {
        console.log(`Added movie.`);
      });
  };

  // Create movies via promises
  const createMovies = async () => {
    let data = [];
    for (let i = 1; i < 6; i++) {
      const response = await fetch(
        `${MOVIES_API}?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&page=${i}`
      );
      const jsonData = await response.json();
      data = [...data, ...jsonData.results];
    }

    db.collection("counters")
      .doc("movies")
      .set({ numAmount: data.length }, { merge: true });

    const promises = [];
    data.forEach((movie) => {
      promises.push(createMovie(movie));
    });
    return await Promise.all(promises);
  };

  await createMovies();
})();
