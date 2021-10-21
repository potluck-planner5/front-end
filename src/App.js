import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";
import HomePage from "./components/HomePage";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Register from './components/Register';
import LoginPage from "./components/Login";
import Dashboard from './components/Dashboard'
import EventInfo from './components/EventInfo'
import Header from './components/Header'
import Profile from './components/Profile'

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
