import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase';


export const auth=getAuth(app);
export const  AuthContext=createContext();


const Authprovider = ({children}) => {
    const user={ displayName: 'Raian'}
    console.log(user?.displayName);

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}


    const userinfo={user,createUser,login}
    return (
        <div>
            <AuthContext.Provider value={userinfo}>
{children}  
            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;