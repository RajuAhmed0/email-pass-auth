import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/Firebase.utils';


export const Context = createContext(null)


const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const register = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const utilits = { user, register, signIn, isLoading }

    return (
        <Context.Provider value={utilits}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;




