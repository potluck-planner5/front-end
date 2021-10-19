import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import HomePage from "./components/HomePage";
import { Route, Link, Switch } from "react-router-dom";
import Register from "./components/Register";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route path={"/register"}>
          <Register />
        </Route>
        <Route path={"/login"}>
          <LoginPage />
        </Route>
        <Route path={"/dashboard"}>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
