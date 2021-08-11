import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";
import Loading from "./common/Loading";
import PrivateRoute from "./privateRoute";
import { AuthProvider } from "./provider/AuthProvider";
import { LoadingProvider } from "./provider/LoadingProvider";
import PublicRoute from "./publicRoute";
import Login from "./view/Account/Login";
import Register from "./view/Account/Register";
import Dashboard from "./view/Dashboard";
import DepositWithdraw from "./view/DepositWithdraw";
import Logout from "./view/Logout";

function App() {
  return (
    <AuthProvider>
      <LoadingProvider>
        <BrowserRouter>
          <Loading />
          <Switch>
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/transaction" exact component={DepositWithdraw} />
            <PrivateRoute path="/logout" exact component={Logout} />
            <PublicRoute path="/" exact component={Login} />
            <PublicRoute path="/register" exact component={Register} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </LoadingProvider>
    </AuthProvider>
  );
}

export default App;
