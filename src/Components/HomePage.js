import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function HomePage() {
  const history = useHistory();

  const routeToRegister = () => {
    history.push("/register");
  };

  return (
    <div className="home">
      {/* <Header /> */}
      <div className="home-text">
        <h2>Potluck Planner!</h2>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum{" "}
        </p>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum{" "}
        </p>
        <button 
            onClick={routeToRegister}
            className="reg-button">
          Register Now!
        </button>
      </div>
      <div>
        <img src="" alt="Potluck meal" className="home-img" />
      </div>
      <Footer />
    </div>
  );
}
