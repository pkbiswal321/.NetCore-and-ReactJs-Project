import React, { useContext, useReducer, useMemo, ReactNode, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/Context";
import { initialState, authReducer } from "../reducer/authReducer";
import { getUserToken } from "../utils/Helper";

interface Props {
    children: ReactNode
}

type ContextType = {
    logedIn: (token: string) => void,
    logedOut: () => void,
    isAuthState: typeof initialState
}


export function AuthProvider({ children }: Props) {
    const value = useProvideAuth();

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext) as ContextType;
};


function useProvideAuth(): ContextType {

    const [isAuthState, authDispatch] = useReducer(authReducer, initialState);
    useEffect(() => {
        console.log('Auth')
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await getUserToken()
            }
            catch (e) {
            }
            if (userToken != null) {
                authDispatch({ type: 'LOGGED_IN', token: userToken == null ? '' : userToken });
            }
        };

        bootstrapAsync();
    }, []);


    const logedIn = (token: string) => {
        authDispatch({ type: 'LOGGED_IN', token: token });
    };

    const logedOut = () => {
        window.localStorage.clear()
        authDispatch({ type: 'LOGGED_OUT' })
        return true
    };


    return {
        logedIn,
        logedOut,
        isAuthState
    };
}