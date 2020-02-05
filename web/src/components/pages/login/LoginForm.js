import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../ui/Styled";

const LoginButton = styled.button`
  background: var(--primary);
  color: white;
`;

export default function LoginForm() {
  // const [username, setUsername] = useState("");
  const [formData, setFormData] = useState({
    username: "default",
    password: "default",
  });

  const usernameChangeHandler = ev => {
    ev.preventDefault();
    setFormData({
      ...formData,
      username: ev.target.value,
    });
  };

  const passwordChangeHandler = ev => {
    ev.preventDefault();
    setFormData({
      ...formData,
      password: ev.target.value,
    });
  };

  const submitHandler = ev => {
    ev.preventDefault();
  };

  return (
    <div>
      <form className="mw6 center" onSubmit={submitHandler}>
        <h1 className="f4 fw4">Anonymous Login</h1>
        <input
          className="db w-100 pv2 ph3 br2 ba bw1 b--light-gray mt2"
          onChange={usernameChangeHandler}
          value={formData.username}
        />
        <input
          className="db w-100 pv2 ph3 br2 ba bw1 b--light-gray mt2"
          onChange={passwordChangeHandler}
          value={formData.password}
          type="password"
        />
        <Button type="submit" className="db w-100 pv2 ph3 br2 mt2">
          Log In
        </Button>
      </form>
    </div>
  );
}
