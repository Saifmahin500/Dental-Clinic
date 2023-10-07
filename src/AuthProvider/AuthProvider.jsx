import {createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const AuthContext = createContext()
const auth = getAuth(app);


 export const AuthProvider = ({children}) => {
   


    const authInfo ={}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;