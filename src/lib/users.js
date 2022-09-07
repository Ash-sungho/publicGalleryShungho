import firestore from '@react-native-firebase/firestore';

export const userCollection = firestore().collection('users');

export const createUser = ({id, displayName, photoURL}) => {
  return userCollection.doc(id).set({
    id: id,
    displayName: displayName,
    photoURL: photoURL,
  });
};

export const getUser = async id => {
  const doc = await userCollection(id).get();
  return doc.data();
};
