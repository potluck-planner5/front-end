<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import axios from "axios"
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import * as yup from 'yup'


import HomePage from './Components/HomePage'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route>
          {/* Sign up */}
        </Route>
        <Route>
          {/* Login */}
        </Route>
        <Route path={'/dashboard'}>
          <Dashboard />
        </Route>
      </Router>
=======
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
>>>>>>> c140866182ec2047fd30a51a0e48907365e014dd
    </div>
  );
}

export default App;
