import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';
import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import faker from 'faker';


(async () => {

  // Get all users
  let users = await auth.listUsers(1000, undefined);


  // Get profiles collection
  let collectionRef = db.collection('profiles');

  // Create a Review
  const createProfile = (userId, username, image, firstName, lastName, street, number, zipCode, city, country, phone, dayOfBirth ) => {
    // Add a document via profile object
    const data = {
      username: username,
      image: image,
      firstName: firstName,
      lastName: lastName,
      street: street,
      number: number,
      zipCode: zipCode,
      city: city,
      country: country,
      phone: phone,
      dayOfBirth: dayOfBirth,
      ...generateTimestamps()
    };

    collectionRef.doc(userId).set(data).then(documentReference => {
      console.log(`Added profile.`);
    });
  };


  /*
   * Create Profiles via promises
  */
    const createProfiles = async () => {
      const promises = [];
       users.users.forEach(async (user) => {
        const gender = generateValueBetweenMinAndMax(0, 1);
        promises.push(await createProfile(
          user.uid,
          user.displayName,
          user.photoURL,
          faker.name.firstName(gender),
          faker.name.lastName(gender),
          faker.address.streetName(),
          faker.random.number({min: 1, max: 100}), 
          faker.address.zipCode('####'),
          faker.address.city(),
          faker.address.country(),
          faker.phone.phoneNumberFormat(5),
          faker.date.past(100)
        ));
      });
      return await Promise.all(promises);
    };
  await createProfiles(); 
})();