import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";

import HomePage from "./components/HomePage";
import { Link, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import AddEvent from "./components/AddEvent";
import EditEvents from "./components/EditEvents";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path={"/dashboard"} component={Dashboard} />
        <PrivateRoute path={"/add-event"} component={AddEvent} />
        <PrivateRoute path={"/edit-event"} component={EditEvents} />
      </Switch>
    </div>
  );
}

export default App;
