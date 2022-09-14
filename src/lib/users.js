// import {firebase} from '@react-native-firebase/firestore';

// export const userCollection = firebase.firestore().collection('users');

// export function createUser({id, displayName, photoURL}) {
//   return userCollection.doc(id).set({
//     id,
//     displayName,
//     photoURL,
//   });
// }
// export async function getUser(id) {
//   const doc = await userCollection
//     .doc(id)
//     .get()
//     .then(data => {
//       console.log('getUser 성공', data);
//     })
//     .catch(e => {
//       console.log(e);
//     });
//   return doc.data();
// }

import firestore from '@react-native-firebase/firestore';
export const usersCollection = firestore().collection('users');

export function createUser({id, displayName, photoURL}) {
  return usersCollection.doc(id).set({
    id,
    displayName,
    photoURL,
  });
}
export async function getUser(id) {
  const doc = await usersCollection.doc(id).get();
  return doc.data();
}

