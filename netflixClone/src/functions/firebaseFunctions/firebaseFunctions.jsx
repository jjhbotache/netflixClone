import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

// create crud functions for firebase
export async function getRegisters(db, clltion,where) {
  const querySnapshot = !!where? 
  await getDocs(collection(db, clltion)) 
  :
  await getDocs(query( collection(db, clltion), where ));
  
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  return items;
}

export async function addRegister(db, clltion, data) {
  const docRef = await addDoc(collection(db, clltion), data);
  return docRef.id;
}

export async function updateRegister(db, clltion, id, data) {
  const docRef = doc(db, clltion, id);
  await updateDoc(docRef, data);
}

export async function deleteRegister(db, clltion, id) {
  const docRef = doc(db, clltion, id);
  await deleteDoc(docRef);
}

