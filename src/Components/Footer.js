import React from "react";
import { Link, Route, Switch } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="help">Help</Link>
        </nav>
      </div>
      <div>
          <p>Copyright 2021 Founded by the best team at Lambda!</p>
      </div>
    </div>
  );
}
