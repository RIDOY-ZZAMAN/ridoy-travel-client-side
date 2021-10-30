import { getAuth, signInWithPopup, GoogleAuthProvider, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import aunthenticationInitialize from "../componets/Firebase/firebase.init";


aunthenticationInitialize();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleGoogleSignIn = () => {
        setIsLoading(true);

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})

            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [])


    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            }).catch((error) => {

            });
    }

    const logOut = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            setUser({});
        }).finally(() => {

            setIsLoading(false)
        });

    }

    return {
        user,
        isLoading,
        handleGoogleSignIn,
        setUserName,
        logOut,
        setIsLoading,

    }
}

export default useFirebase;