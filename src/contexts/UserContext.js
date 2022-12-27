import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.init';
import Cookies from 'js-cookie'
import axios from 'axios'


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {  
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // why are we doing this?

    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, async(currentUser) => { 
            if(currentUser){
                const {token}= await currentUser.getIdTokenResult()           
                // console.log("========",token)
                // set token to cookie
                Cookies.set('token', token, { expires: 7 })
                console.log("TOKEN", token);
                // setUser(currentUser);
                setLoading(false);
                // console.log('auth state changed', currentUser);
                // send this token to backend
                // backend will check if this token is valid (using firebase admin tool)
                // if it is verified, you get the same user information in the backend too
                // then you can decide to either save this user in your database or update the existing user
               // then send the user information back to client
             axios.post(`${process.env.REACT_APP_API}/current-user`, {},
               {
                headers: {
                  token
                },
              }).then((res) => {
                console.log("RES =====> ", res);
                setUser(res.data)
               }).catch(error=>{
               console.log(error)
               })
            } else{               
                setUser({})
                Cookies.remove('token')
            }   
           
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {user, loading, createUser, signIn, logOut, signInWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;



