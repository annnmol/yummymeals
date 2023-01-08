// import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'api-key',
//   authDomain: 'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: 'project-id',
//   storageBucket: 'project-id.appspot.com',
//   messagingSenderId: 'sender-id',
//   appId: 'app-id',
//   measurementId: 'G-measurement-id',
// };

// const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNvFLiNVIDtlJOFspI5vK65K-iENP8SNA",
  authDomain: "snaptoday-5090d.firebaseapp.com",
  projectId: "snaptoday-5090d",
  storageBucket: "snaptoday-5090d.appspot.com",
  messagingSenderId: "140607565462",
  appId: "1:140607565462:web:0303af8761f09235c31cb7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
