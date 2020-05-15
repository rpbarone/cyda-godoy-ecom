import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_aW4c-NEGoscDxz2i5HHFSsKW9vlJY8w",
    authDomain: "cydagodoy-db.firebaseapp.com",
    databaseURL: "https://cydagodoy-db.firebaseio.com",
    projectId: "cydagodoy-db",
    storageBucket: "cydagodoy-db.appspot.com",
    messagingSenderId: "281072722427",
    appId: "1:281072722427:web:8dc955f2755a65013b6b5e",
    measurementId: "G-VXR97J8DCX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithFacebook = () => auth.signInWithPopup(provider);

export default firebase;
