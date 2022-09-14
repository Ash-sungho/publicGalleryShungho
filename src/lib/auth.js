import auth from '@react-native-firebase/auth';

export const signIn = ({email, password}) => {
  console.log('로그인');
  return auth().signInWithEmailAndPassword(email, password);
};

export const signUp = ({email, password}) => {
  console.log('가입');
  return auth().createUserWithEmailAndPassword(email, password);
};

export const subscribeAuth = callback => {
  return auth().onAuthStateChanged(callback);
};
export const signOut = () => {
  return auth().signOut();
};
