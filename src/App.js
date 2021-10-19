import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import axios from "axios";
<<<<<<< HEAD

import HomePage from "./components/HomePage";
import { Link, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
=======
import HomePage from "./Components/HomePage";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Register from './Components/Register';
import LoginPage from "./Components/Login";
import Dashboard from './Components/Dashboard'
import EventInfo from './Components/EventInfo'
>>>>>>> bfd7f8b (Started the reserved items page)

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
<<<<<<< HEAD
        <PrivateRoute path="/dashboard" component={Dashboard} />
=======
        <Route path={'/dashboard'}>
          <Dashboard />
        </Route>
        <Route path={'/event_info'}>
          <EventInfo />
        </Route>
        
>>>>>>> bfd7f8b (Started the reserved items page)
      </Switch>
    </div>
  );
}

export default App;
