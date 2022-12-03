
import app from "../firebase/firebase.ini";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const usercontext = createContext();
//   get auth 
const auth = getAuth(app);
const Authcontext = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    //   create user with email and password
    function createuser(email, password) {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    //create user email  and password end 

    /// user display name 
    const userproflie = (name,) => {
        setLoading(false)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })

    }
    // user display name end

    // login user 
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // login user end

    // logout user 
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    // logout user end

    // user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)

        })
        return () => unsubscribed()
    }, [])
    // user state change end

    const info = {
        createuser,
        user,
        userproflie,
        logout,
        loading,
        login
    }
    return (
        <usercontext.Provider value={info}>
            {children}
        </usercontext.Provider>
    )
};

export default Authcontext;