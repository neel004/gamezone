import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "./login.component";
import SignUp from "./signup.component";
import Aboutus from "./aboutus.component";
import ForgetPassword from "./forgetPassword.component";
import './header1.css'
import test from "./test.component";
export default() => {

        return (
            <Router>
            <Redirect to='/sign-in'  />
            <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>GameZone!</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/forget-password"}>Forget Password</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/about-us"}>About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    
          <div className="auth-wrapper">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/test" component={test} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/about-us" component={Aboutus} />
                <Route path="/forget-password" component={ForgetPassword} />
              </Switch>
            </div>
        </div>
        
        </Router>

        );
   

}