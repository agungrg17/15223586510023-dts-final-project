// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCNhbEN0KmZtGK-7qr7phYaZ7udllW1eIs",
//   // apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "final-project-dts-news.firebaseapp.com",
//   projectId: "final-project-dts-news",
//   storageBucket: "final-project-dts-news.appspot.com",
//   messagingSenderId: "20505103801",
//   appId: "1:20505103801:web:984797bbfe92d852757a68",
//   measurementId: "G-HMDVBDS2NP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// const auth = getAuth(app);

// export { auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
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
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider(); // Create a Google auth provider
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    return err;
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    return err;
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    alert(err.message);
    return err;
  }
};

const logOut = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logOut,
};

