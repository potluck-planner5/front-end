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
    </div>
  );
}

export default App;
