import React, { useState } from "react";
import UserPool from "../UserPool";
import './signup.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  function redirectt() {
    // const COGNITO_CLIENT_ID = "33j71htshrgj2jm6uir8u00ia8";
    // const COGNITO_Pool_ID = "us-east-1_5G1rm0YWR";
    // const COGNITO_POOL_URL = "gamezone.auth.us-east-1.amazoncognito.com";
    //const CLIENT_SECRET = "ADD SECRET KEY OF APP CLIENT";
    window.location.href = "https://gamezone.auth.us-east-1.amazoncognito.com//oauth2/authorize?identity_provider=Google&redirect_uri=https://gamezone004.herokuapp.com/test/&response_type=token&client_id=33j71htshrgj2jm6uir8u00ia8&scope=email openid phone profile"
    // https:///gamezone.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=33j71htshrgj2jm6uir8u00ia8&redirect_uri=https://localhost/"
  }
  const registerUser = (email, lname, fname) => {
    // const uid = "18it092@charusat.edu.in"
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, lname, fname }),
    };
    console.log(requestOptions);
    fetch(
      "https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/sign-up",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      registerUser(email, lname, fname);
      console.log(data);
    });
    
  };
  return (
    <div className="auth-innerr">
      <div>
      <form onSubmit={onSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
          <label>First Name</label>
          <input type="text" className="form-control" placeholder="Enter First Name" value={fname} onChange={event => setFname(event.target.value)} />
      </div>

      <div className="form-group">
          <label>Last Name</label>
          <input type="text" className="form-control" placeholder="Enter Last Name" value={lname} onChange={event => setLname(event.target.value)} />
      </div>

      <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)} />
      </div>

      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={event => setPassword(event.target.value)} />
      </div>

      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
      <p className="forgot-password text-right">
          Already registered <Link className="nav-link" to={"/sign-in"}>Sign In?</Link>
      </p>
  </form>
      </div>
      <div>
        <span class="idpDescription-customizable">
          Sign In with your social account
        </span>
        <button
          name="googleSignUpButton"
          onClick={redirectt}
          class="btn google-button socialButton-customizable"
        >
          <span>
            <svg
              class="social-logo"
              viewBox="0 0 256 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              ></path>
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              ></path>
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              ></path>
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EA4335"
              ></path>
            </svg>
          </span>
          <span>Continue with Google</span>
        </button>

        <br />
        <span class="legalText-customizable">
          We won't post to any of your accounts without asking first
        </span>
      </div>
    </div>
  );
};
