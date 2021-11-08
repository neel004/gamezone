import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./home.component";
import Logout from "./logout.component";
import Purchase from "./purchase.component";
import PlayGame from "./playgame.component";
import './header2.css'
export default() => {

    return (

    <Router>
        {/* <Home /> */}
        <Redirect to='/home'  />
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>GameZone!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/playgame"}>Play</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/purchase"}>Purchase</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/logout"}>Logout</Link>
              </li>
    
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/playgame" component={PlayGame} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
    </div> 
    </Router>);
}