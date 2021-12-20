
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBYs1VXO3IyAHZhSNxot3CiIinB_aXHhXk",
    authDomain: "app-test-8779f.firebaseapp.com",
    databaseURL: "https://app-test-8779f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "app-test-8779f",
    storageBucket: "app-test-8779f.appspot.com",
    messagingSenderId: "47315526077",
    appId: "1:47315526077:web:84275876be2985c125b2d4"
};


 export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);




