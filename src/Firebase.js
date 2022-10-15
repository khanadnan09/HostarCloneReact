import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAsM_y6s_VMMOlY_lkhzbYhMpxC8TrJJZc",
  authDomain: "disney-plus-bafa7.firebaseapp.com",
  projectId: "disney-plus-bafa7",
  storageBucket: "disney-plus-bafa7.appspot.com",
  messagingSenderId: "749259967210",
  appId: "1:749259967210:web:8c3007bd394c3a37346593"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default firebase;
