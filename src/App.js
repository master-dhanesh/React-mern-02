import { app } from "./config";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
    const [isUser, setIsUser] = useState(false);
    const auth = getAuth(app);
    const user = auth.currentUser;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true);
            }
        });
    }, [isUser]);

    const SignupHandler = async () => {
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                "john@doe.john",
                "1234567890"
            );

            console.log("User registred, required signin");
        } catch (error) {
            console.log(error.message);
        }
    };

    const SigninHandler = async () => {
        try {
            const res = await signInWithEmailAndPassword(
                auth,
                "john@doe.john",
                "1234567890"
            );
            res.user && setIsUser(true);
            console.log("User signed in");
        } catch (error) {
            console.log(error.message);
        }
    };

    const SignoutHandler = async () => {
        await signOut(auth);
        console.log("User logged out");
    };

    console.log(isUser);
    return (
        <div className="container mt-5">
            <button onClick={SignupHandler} className="btn btn-primary me-3">
                Signup
            </button>
            <button onClick={SigninHandler} className="btn btn-primary me-3">
                Signin
            </button>
            <button onClick={SignoutHandler} className="btn btn-primary me-3">
                Logout
            </button>
        </div>
    );
};

export default App;
