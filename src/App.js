import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import axios from "axios";

import HomePage from "./Components/HomePage";
import { Link, Route, Switch } from "react-router-dom";
import Register from "./Components/Register";
import LoginPage from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import AddEvent from "./Components/AddEvent";

function App() {
  return (
    <div className="App">
      <Header />
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
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/add-event" component={AddEvent} />
      </Switch>
    </div>
  );
}

export default App;
