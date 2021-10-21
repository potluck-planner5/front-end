import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute";
import axios from "axios";
import HomePage from "./Components/HomePage";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Register from './Components/Register';
import LoginPage from "./Components/Login";
import Dashboard from './Components/Dashboard'
import EventInfo from './Components/EventInfo'
import Header from './Components/Header'
import Profile from './Components/Profile'

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
        <Route path={'/dashboard'}>
          <Dashboard />
        </Route>
        <Route path ='/profile'>
          <Profile />
         </Route> 
        <Route path={'/event_info'}>
          <EventInfo />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
