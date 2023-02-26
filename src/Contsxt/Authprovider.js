import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase';


export const auth=getAuth(app);
export const  AuthContext=createContext();


const Authprovider = ({children}) => {
    // const user={ displayName: 'Raian'}
    const [user,setuser]=useState(null);
    console.log(user?.displayName);
    const googleprovider= new GoogleAuthProvider();

   
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

    const googlelogin=()=>{
        return signInWithPopup(auth,googleprovider);

    }


useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,(currentuser=>{
      
          setuser(currentuser)
         
      }))
      return ()=>unsubscribe();

  })



    const userinfo={user,createUser,login,setuser,googlelogin}
    return (
        <div>
            <AuthContext.Provider value={userinfo}>
{children}  
            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;