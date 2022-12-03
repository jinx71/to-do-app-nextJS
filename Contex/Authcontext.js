
import app from "../firebase/firebase.ini";
import { getAuth } from "firebase/auth";
import { createContext } from "react";
export const usercontext = createContext();
//   get auth 
const auth = getAuth(app);
const Authcontext = ({ children }) => {
    function createuser(email, password) {

        return createUserWithEmailAndPassword(auth, email, password)
    }



    const info = {
        createuser,
    }
    return (
        <usercontext.Provider value={info}>
            {children}
        </usercontext.Provider>
    )
};

export default Authcontext;