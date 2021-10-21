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
