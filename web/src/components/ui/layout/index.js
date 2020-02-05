import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginButton from "./LoginButton";

const Header = styled.div`
  background-color: var(--primary);
  color: var(--secondary);
`;

const HeaderTextLink = styled(Link)`
  text-decoration: none;
  color: var(--secondary);
`;

export default function Layout({ children }) {
  return (
    <div className="sans-serif">
      <Header className="pv4 tc relative">
        <div className="absolute top-1 right-1">
          <LoginButton />
        </div>
        <HeaderTextLink to="/">
          <h1 className="f-5 tracked-mega">HELPq</h1>
        </HeaderTextLink>
      </Header>
      <div className="mw7 center">{children}</div>
    </div>
  );
}
