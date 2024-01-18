// src/firebase.js 
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../constants/firebaseConfig.json";
import snakeToPascalCase from "../functions/simpleHelpers/snakeToPascalCase";

// covert the properties names to camelCase
const firebaseConfigParsed = {};
for (const key in firebaseConfig) {
  firebaseConfigParsed[snakeToPascalCase(key).trim()] = firebaseConfig[key];
}

const app = initializeApp(firebaseConfigParsed);
const db = getFirestore(app);

export default db;