// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBGqktQBjz5Ow4bmkDO2v2epilGwIrPF40",
//     // apiKey: process.env.REACT_APP_FIREBASE_KEY,
//     authDomain: "auth-react-a3477.firebaseapp.com",
//     projectId: "auth-react-a3477",
//     storageBucket: "auth-react-a3477.appspot.com",
//     messagingSenderId: "841109424677",
//     appId: "1:841109424677:web:d59c818268158556124dcc"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNhbEN0KmZtGK-7qr7phYaZ7udllW1eIs",
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "final-project-dts-news.firebaseapp.com",
  projectId: "final-project-dts-news",
  storageBucket: "final-project-dts-news.appspot.com",
  messagingSenderId: "20505103801",
  appId: "1:20505103801:web:984797bbfe92d852757a68",
  measurementId: "G-HMDVBDS2NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
