import React, { useContext, useReducer, useMemo, ReactNode } from "react";
import { LoadingContext } from "../context/Context";
import { initialState, loadingReducer } from "../reducer/loadingReducer";

interface Props {
    children: ReactNode
}

type ContextType = {
    startLoading:()=>void,
    stopLoading:()=>void,
    loadingState:typeof initialState
}


export function LoadingProvider({ children }: Props) {
    const value = useProvideLoading();

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => {
    return useContext(LoadingContext) as ContextType;
};


function useProvideLoading():ContextType {

    const [loadingState, loadingDispatch] = useReducer(loadingReducer, initialState);

    const startLoading = () => {
        loadingDispatch({ type: 'START_LOADING' })
    };

    const stopLoading = () => {
        loadingDispatch({ type: 'STOP_LOADING' })
    };


    return {
        startLoading,
        stopLoading,
        loadingState
    };
}