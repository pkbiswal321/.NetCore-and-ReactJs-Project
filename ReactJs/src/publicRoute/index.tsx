import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../provider/AuthProvider';

interface PublicRouteProps {
    component: React.ComponentType<any>;
    path: string;
    exact?: boolean;
}

const PublicRoute = ({ component: Component, ...rest }: PublicRouteProps) => {
    return <Route {...rest} component={(props: any) => {
         const token = window.localStorage.getItem('userToken');
        const { isAuthState } = useAuth()

        if (token) {
            return <Redirect to={`/dashboard`} />
        } else {
            return <Component {...props} />
        }
    }} />
}

export default PublicRoute;