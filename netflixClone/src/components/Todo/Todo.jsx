import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import db from "../../constants/firebase";
import { useEffect, useRef, useState } from "react";

export default function Todo() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    refreshItems();
  }, []);

  function refreshItems() {
    getDocs(collection(db, "items")).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setItems(data);
    });
  }

  function addRegister(e) {
    addDoc(collection(db, "items"), {
      name: inputRef.current.value,
    }).then(() => {
      refreshItems()
    })
  }

  function deleteRegister(id) {
    deleteDoc(doc(db, "items", id)).then(() => {
      refreshItems();
    })
  }

  function modifyRegister(id) {
    const newName = prompt("New name");
    if (newName) {
      updateDoc(
        doc(db, "items", id),
        { name: newName }
      ).then(() => {
        refreshItems();
      })
    }
  }


  return (
    <div>
      <h1>Todo</h1>

      
      <div className="input-group mb-3">
        <input ref={inputRef}  type="text" className="form-control" placeholder="Add an item"/>
        <button onClick={addRegister} className="btn btn-outline-secondary" type="button" >Add</button>
      </div>
      <ul>
        {items.map((i) => (
          <li key={i.id} className="my-1">
            <div className="container btn-group" role="group" aria-label="Button group name" style={{width:"100%",maxWidth:450}}>
              <button type="button" className="col btn btn-outline-primary disabled">{i.name}</button>
              <button onClick={e=>modifyRegister(i.id)} type="button" className="col-1 btn btn-warning">🖊️</button>
              <button onClick={e=>deleteRegister(i.id)} type="button" className="col-1 btn btn-danger">✖️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

