import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDVj5ZTMn_2J8LmNhjnwPXHyoAZIOq-RWk",
    authDomain: "mern02-aft.firebaseapp.com",
    projectId: "mern02-aft",
    storageBucket: "mern02-aft.appspot.com",
    messagingSenderId: "94483395930",
    appId: "1:94483395930:web:f4e8036780b391c5d0af63",
    measurementId: "G-YCNQ2N0PHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
