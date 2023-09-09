import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from './clearDom';
import clearNav from './clearNav';
import clearLogin from './clearLogin';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(() => {
    clearLogin();
  });
};

const signOut = () => {
  firebase.auth().signOut().then(() => {
    clearNav();
    clearDom();
  });
};

export { signIn, signOut };
