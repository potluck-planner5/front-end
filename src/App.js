import logo from "./logo.svg";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import axios from "axios";


import HomePage from "./components/HomePage";
import { Link, Route, Switch } from "react-router-dom";



import EventInfo from './components/EventInfo'
import HomePage from "./components/HomePage";
import { Link, Route, Switch } from "react-router-dom";
import Profile from './components/Profile'
import Register from "./components/Register";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import AddEvent from "./components/AddEvent";
import EditEvents from "./components/EditEvents";
import Event from "./components/Event";



function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
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

        <PrivateRoute path={"/dashboard"} component={Dashboard} />
        <PrivateRoute path={"/add-event"} component={AddEvent} />

        <PrivateRoute exact path={"/edit-event"} component={EditEvents} />
        <PrivateRoute exact path={"/edit-event/:id"} component={Event} />


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
