import { db } from "./firebase.js";
import {
    addDoc,
    collection,
    onSnapshot,
    deleteDoc,
    doc,
    updateDoc,
    setDoc,
    
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"


// Add a new document in collection "cities"
await setDoc(doc(db, "VietNamCitites", "HN"), {
    name: "HA NOI",
    country: "VietNam"
  });

const cityRef = doc(db, "VietNamCitites", "HCM")
setDoc(cityRef, { capital: true }, {merge: true});

await updateDoc(cityRef,{
    capital: false
})