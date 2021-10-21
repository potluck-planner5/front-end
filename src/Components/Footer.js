import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import styled from 'styled-components'

export default function Footer() {

  const NavBox = styled.div`
    display: flex;
    justify-content: center;
  `

  const FooterNav = styled.nav`
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 30%;
  `

  return (
    <div className="footer">
      <NavBox>
        <FooterNav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="help">Help</Link>
        </FooterNav>
      </NavBox>
      <div>
          <p>Copyright 2021 Founded by the best team at Lambda!</p>
      </div>
    </div>
  );
}
