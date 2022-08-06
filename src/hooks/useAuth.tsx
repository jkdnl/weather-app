import React, {useContext, useEffect, useState} from "react";
import {auth} from "../utils/firebaseSetUp";
import firebase from "firebase/compat";

interface AuthContextProps {
    currentUser: firebase.User | null | undefined,
    signIn: any,
    signUp: any,
    signOut: any
}

const AuthContext = React.createContext<AuthContextProps>({
        currentUser: null,
        signIn: ((email: string, password: string) => Promise<firebase.auth.UserCredential>),
        signUp: ((email: string, password: string) => Promise<firebase.auth.UserCredential>),
        signOut: Promise<void>
    }
)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: {children: React.ReactNode}) {

    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
    const [loading, setLoading] = useState(true)

    function signIn(email: string, password: string) {
        return auth.signInWithEmailAndPassword(email, password)
    }
    function signUp(email: string, password: string) {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function signOut() {
        return auth.signOut()
    }

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setLoading(false)
            setCurrentUser(user)
        })
    }, [])

    const value: AuthContextProps = {
        currentUser,
        signIn,
        signUp,
        signOut
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}