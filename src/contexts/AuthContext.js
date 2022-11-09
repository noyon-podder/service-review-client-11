import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthProvider = createContext();
const AuthContext = ({children}) => {
    const [user, setUser] = useState({displayName: "Happy"});

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            return () => unsubscribe();
        })
    },[])

    const authInfo = {
        user,
        createNewUser,
        userSignIn
    }
    return (
        <div>
            <AuthProvider.Provider value={authInfo}>
                 {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;