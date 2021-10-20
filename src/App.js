import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import axios from "axios";

import HomePage from "./Components/HomePage";
import { Link, Route, Switch} from "react-router-dom";
import Register from './Components/Register';
import LoginPage from "./Components/Login";
import Dashboard from './Components/Dashboard'
import EventInfo from './Components/EventInfo'

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
        <Route path={'/event_info'}>
          <EventInfo />
        </Route>
        
      </Switch>


    </div>
  );
}

export default App;
