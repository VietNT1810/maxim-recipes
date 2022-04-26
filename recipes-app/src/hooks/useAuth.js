import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";


export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}