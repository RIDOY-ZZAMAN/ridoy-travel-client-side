import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const aunthenticationInitialize = () => {
    initializeApp(firebaseConfig);
}

export default aunthenticationInitialize;