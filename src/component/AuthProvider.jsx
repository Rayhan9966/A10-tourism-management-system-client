import React, { createContext, useState } from 'react';
export const AuthContext= createContext(null);


const AuthProvider = ({children}) => {
    const [user,setuser] =useState("user nai")

    return (
        <div>
        <AuthContext.Provider value={user}>    {children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;