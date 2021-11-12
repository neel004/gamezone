import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./home.component";
import Logout from "./logout.component";
import Purchase from "./purchase.component";
import PlayGame from "./playgame.component";
import GetStarted from "./getStarted.component";
import './header2.css'
import purchaseComponent from "./purchase.component";
export default() => {

     const [minutes, setMinutes] = useState(false);

     useEffect(() => {
      const minutes = localStorage.getItem('minutes')
      if (minutes) {
        setMinutes(minutes)
      }
        
  }, [])
     const getMinutes = async() => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log(localStorage.getItem('minutes'));
      setMinutes(localStorage.getItem('minutes'));
     }
     getMinutes();
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
                <Link className="nav-link" to={"/get-started"}>Get Started</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/logout"}>Logout</Link>
              </li>
              <li className="nav-item">
                
                {minutes && <span className="nav-link"><strong>Minutes:{minutes}</strong></span>}
                
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
            <Route path="/get-started" component={GetStarted} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
    </div> 
    </Router>);
}