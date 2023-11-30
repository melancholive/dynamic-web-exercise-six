import { useState, useEffect, useCallback } from "react"
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "@/app/components/Header";
import firebaseConfig from "@/app/components/firebaseConfig";

export default function MyApp({ Component, pageProps }) {
    const [appInitialized, setAppInitialized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);

    // e stands for element and references the form
    const createUser = useCallback((e) => {

    }, []);

    const loginUser = useCallback((e) => {

    }, []);

    const logoutUser = useCallback((e) => {

    }, []);

    // Initialize Firebase
    useEffect(() => {
        initializeApp(firebaseConfig);
        setAppInitialized(true);
    }, [])

    // User has loaded page
    // Check their status and set state accordingly
    useEffect(() => {
        if ( appInitialized ) {
            const auth = getAuth();
            
            onAuthStateChanged(auth, (user) => {
                if (user){
                    // User is signed in
                    // See docs for a list of available properties
                    setUserInformation(user);
                    setIsLoggedIn(true);
                } else {
                    // User is signed out
                    setUserInformation(null);
                    setIsLoggedIn(false);
                }
                // setLoading to false when everything is complete
                setIsLoading(false);
            });
        }
    }, [appInitialized]);

    if (isLoading) return null;
    
    return (
        <>
            <Header/>
            <Component
                {...pageProps}
                createUser = {createUser}
                isLoggedIn={isLoggedIn}
                loginUser = {loginUser}
                userInformation={userInformation}
            />
        </>
    );
}