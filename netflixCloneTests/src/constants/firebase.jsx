// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig.json";

// covert the properties names to camelCase
const firebaseConfigParsed = {};
for (const key in firebaseConfig) {
  firebaseConfigParsed[snakeToPascalCase(key).trim()] = firebaseConfig[key];
}




const app = initializeApp(firebaseConfigParsed);
const db = getFirestore(app);

export default db;




function snakeToPascalCase(input) {
  // turns the first letter of each word to uppercase
  // and removes all spaces
  
  

  // Dividir la cadena en palabras usando el caracter "_"
  const words = input.split("_");

  // Convertir la primera letra de cada palabra a mayúsculas
  const pascalCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Unir las palabras para formar la cadena en Pascal case
  let pascalCaseString = pascalCaseWords.join("");
  pascalCaseString = pascalCaseString[0].toLowerCase() + pascalCaseString.slice(1);
  
  return pascalCaseString;
}
