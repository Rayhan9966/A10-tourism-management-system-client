import React, { createContext, useState } from 'react';
export const AuthContext= createContext(null);
import { createUserWithEmailAndPassword, signInWithEmailAndPassword}  from "firebase/auth";
import { auth } from '../Firebase/FireBase.init';


const AuthProvider = ({children}) => {
    // const [user,setuser] =useState("user nai")
    const registerUser=(email,password)=>{
createUserWithEmailAndPassword(auth,email,password)
// .then(result=>console.log(result.user));
}
const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
     // .then(result=>console.log(result.user));

 }
//  const googleLogin=()=>{
//      return signInWithPopup(auth,googleProvider)
//  }
//  const facebookLogin=()=>{
//      return signInWithPopup(auth,facebookProvider)
//  }
const authInfo={
    registerUser,
    loginUser
}
    return (
        <div>
        <AuthContext.Provider value={authInfo}>    {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;