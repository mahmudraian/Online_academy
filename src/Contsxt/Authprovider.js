import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';


export const auth=getAuth(app);
export const  AuthContext=createContext();


const Authprovider = ({children}) => {
    // const user={ displayName: 'Raian'}
    const [checked,setchecked]=useState(null);
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true)
    const[showerror,seterror]=useState(null);

    
    console.log(user?.displayName);
    const googleprovider= new GoogleAuthProvider();

   
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const login=(email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

    const googlelogin=()=>{
        setloading(true)
        return signInWithPopup(auth,googleprovider);

    }

    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }


useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,(currentuser=>{
      
          setuser(currentuser)
          setloading(false);
         
      }))
      return ()=>unsubscribe();

  })



    const userinfo={user,createUser,login,setuser,googlelogin,logout,loading,setchecked,checked,seterror,showerror}
    return (
        <div>
            <AuthContext.Provider value={userinfo}>
{children}  
            </AuthContext.Provider>
            
        </div>
    );
};

export default Authprovider;