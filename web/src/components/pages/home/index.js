import React, { useContext } from "react";
import AuthContext from "../../../store";
// import Styled from "../../ui/Styled";

export default function Home() {
  const [state] = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
