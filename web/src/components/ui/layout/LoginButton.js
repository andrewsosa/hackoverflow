import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../store";

import Styled from "../Styled";

export default function LoginButton() {
  const [state] = useContext(AuthContext);
  const { isLoggedIn } = state;
  return (
    <>
      {isLoggedIn ? (
        "Logged In"
      ) : (
        <Link to="/login">
          <Styled.Button primary className="fw6">
            Log In
          </Styled.Button>
        </Link>
      )}
    </>
  );
}
