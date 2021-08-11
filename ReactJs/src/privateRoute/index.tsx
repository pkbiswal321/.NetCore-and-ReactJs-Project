import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

interface PrivateRouteProps {
    component: React.ComponentType<any>;
    path: string;
    exact?: boolean;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
    return <Route {...rest} component={(props: any) => {
        const token = window.localStorage.getItem('userToken');
        const { isAuthState } = useAuth()
        console.log('isAuthState', isAuthState)
        if (token) {
            return <Component {...props} />
        } else {
            return <Redirect to={`/`} />
        }
    }} />
}

export default PrivateRoute;