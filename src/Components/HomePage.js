import React from "react";
import { useHistory, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import potluckPhoto from "../Potluck.jpg";

import Button from "@mui/material/Button";
import styled from "styled-components";

export default function HomePage() {
  // const history = useHistory();

  // const routeToRegister = () => {
  //   history.push("/register");
  // };

  // const routeToLogin = () => {
  //   history.push("/login");
  // };

  const HomeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 6%;
  `;

  const HomeText = styled.div`
    text-align: left;
    width: 50%;
  `

  return (
    <div className="home-page">
      <Header />
      <HomeDiv>
        <HomeText>
          <h2>Potluck Planner!</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
          <Link to={"/login"} style={{ textDecoration: "none", marginRight: '2%' }}>
            <Button variant="contained">Sign In</Button>
          </Link>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <Button variant="contained">Register</Button>
          </Link>
        </HomeText>
        <div>
          <img src={potluckPhoto} alt="Potluck meal" className="home-img" />
        </div>
      </HomeDiv>
      <Footer />
    </div>
  );
}
