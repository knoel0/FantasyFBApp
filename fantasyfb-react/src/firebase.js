import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKSJO4FlFxzOaITsCPQugqfZf3XKG7CqE",
    authDomain: "fantasy-football-cbe56.firebaseapp.com",
    projectId: "fantasy-football-cbe56",
    storageBucket: "fantasy-football-cbe56.appspot.com",
    messagingSenderId: "896914298567",
    appId: "1:896914298567:web:0b084bc04b4ac7fdfb90e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }