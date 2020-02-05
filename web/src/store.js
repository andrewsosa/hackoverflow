import React from "react";

const AuthContext = React.createContext({});

export default AuthContext;
export const { Provider, Consumer } = AuthContext;
