// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyClNhuMVsGx4Yuc5AB1yaiPqKzOep-kZoc",
    authDomain: "netflix-clone-b5fdc.firebaseapp.com",
    projectId: "netflix-clone-b5fdc",
    storageBucket: "netflix-clone-b5fdc.appspot.com",
    messagingSenderId: "128694327649",
    appId: "1:128694327649:web:f9033f2e1f77846f1acd20",
    measurementId: "G-X996QJBJQ5"
  
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {auth};
  export default db;