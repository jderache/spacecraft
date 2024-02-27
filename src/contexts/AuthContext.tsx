// src/contexts/AuthContext.tsx
import {createContext, useContext} from "react";
import React from "react";

const AuthContext = createContext({
    isSignedIn: false,
    toggleIsSignedIn: () => {}
});

const AuthContextProvider = ({ children } : {children:any}) => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);

    const toggleIsSignedIn = () => {
        console.log('toggleIsSignedIn appelé');
        setIsSignedIn(!isSignedIn);
    }

    return (
        <AuthContext.Provider value={{isSignedIn, toggleIsSignedIn}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuthContext = () => {
    return useContext(AuthContext);
}
export {AuthContextProvider, useAuthContext};