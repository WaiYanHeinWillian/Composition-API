// import firebase from "firebase/app"
// import "firebase/firestore"

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDiwwwSovsSRsKsDkePF-2lcpLF_-2hS3k",
  authDomain: "vue-blog-system-ff099.firebaseapp.com",
  projectId: "vue-blog-system-ff099",
  storageBucket: "vue-blog-system-ff099.appspot.com",
  messagingSenderId: "66853259814",
  appId: "1:66853259814:web:cd5fbc03031a77795074e7"
};

firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();
export {db}


