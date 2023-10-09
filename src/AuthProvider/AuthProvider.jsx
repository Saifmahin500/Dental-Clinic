import {createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

 export const AuthProvider = ({children}) => {
    const [user,setUser] = useState()
   
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
        })
        return () => {
            return unSubScribe();
        }
    },[])

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo ={googleSignIn,createUser,signIn,user,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;