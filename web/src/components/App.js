import React, { useReducer } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "tachyons/css/tachyons.min.css";
import "../styles/global.css";

import AuthContext from "../store";
import { authReducer, initialAuthState } from "../reducers/auth";

import Layout from "./ui/layout";
import Home from "./pages/home";
import Login from "./pages/login";

export default function App() {
  const authState = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={authState}>
      <Router>
        <Layout className="sans-serif">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
}
