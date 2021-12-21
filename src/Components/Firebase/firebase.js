
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useEffect, useState} from "react";


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
export const auth = getAuth(app);

//Custom hook
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
       const unsub = onAuthStateChanged (auth, user => setCurrentUser(user) );
       return unsub;

    },[])

    return currentUser;
}

export function logout() {
    return signOut(auth);
}





