import React from "react";
import { app } from "./config";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    getDoc,
    doc,
} from "firebase/firestore";
import { async } from "@firebase/util";
const App = () => {
    const db = getFirestore(app);
    const currentCollection = collection(db, "users");

    const addUser = async () => {
        const docRef = await addDoc(currentCollection, {
            name: "john doe",
            username: "john.doe",
        });
        console.log(docRef);
    };

    const readUsers = async () => {
        const qs = await getDocs(currentCollection);
        const userData = [];
        qs.forEach((doc) => {
            userData.push({ id: doc.id, ...doc.data() });
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
        console.log(userData);
    };

    const deleteUser = async () => {
        const docRef = await doc(currentCollection, "kIxLDjUuKkHzX4rn9hfT");
        await deleteDoc(docRef);
        console.log("User Deleted");
    };

    return (
        <div className="container mt-5 ">
            <button onClick={addUser} className="btn btn-primary me-3">
                Add Firestore Doc
            </button>

            <button onClick={readUsers} className="btn btn-primary me-3">
                Read Firestore Docs
            </button>

            <button onClick={deleteUser} className="btn btn-danger me-3">
                Delete Firestore Docs
            </button>
        </div>
    );
};

export default App;
