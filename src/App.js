import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from './Components/PrivateRoute';
import axios from "axios";
import HomePage from "./Components/HomePage";
import { Route, Link, Switch } from "react-router-dom";
import Register from './Components/Register';
import LoginPage from "./Components/Login";

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
      </Switch>
    </div>
  );
}

export default App;
