import React, { createContext, useEffect, useState } from 'react';
export const AuthContext= createContext(null);
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,FacebookAuthProvider,onAuthStateChanged, signOut }  from "firebase/auth";
import { auth } from '../Firebase/FireBase.init';
// import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth/cordova';


const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const googleProvider=new GoogleAuthProvider()
    const facebookProvider=new FacebookAuthProvider()

    const registerUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
// .then(result=>console.log(result.user));
}
const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
     // .then(result=>console.log(result.user));

 }
 const googleLogin=()=>{
     return signInWithPopup(auth,googleProvider)
 }
 const facebookLogin=()=>{
     return signInWithPopup(auth,facebookProvider)
}
const logOut=()=>{
    return signOut(auth)
}
const authInfo={
    registerUser,
    loginUser,
    user,
    setUser,
   googleLogin,
   facebookLogin,
   logOut,
   signOut
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          alert("Log in Successfully")
        } else {
            alert("Logout Successfully")
            setUser(null);
        }});
        return()=>{
            unsubscribe()
        }

},[])
    return (
        <div>
        <AuthContext.Provider value={authInfo}>    {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;