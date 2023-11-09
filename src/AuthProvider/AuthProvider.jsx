import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {


const [userSee, setUser] = useState(null)
const [loading, setLoading] = useState(true)



const Register = (email, password) => {
    setLoading(true)
return createUserWithEmailAndPassword(auth, email, password) 
}



const loginUser = (email, password) => {
    setLoading(true)
return signInWithEmailAndPassword(auth, email, password)

}

const logOut = () => {
    setLoading(true)
   return signOut(auth)

}



useEffect(() => {

 const currentU = onAuthStateChanged(auth, currentUser => {

    setLoading(false)
            setUser(currentUser)
          
        
           

    })

    return () => currentU()
    


}, [])



const provider = new GoogleAuthProvider();

const googleSignFun = () => {
    return signInWithPopup(auth, provider)
}






const authInfo = {
    Register,
    loginUser,
    userSee,
    logOut,
    googleSignFun,
    loading,



}

    return (
        <>
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
            
        </>
    );
};

export default AuthProvider;