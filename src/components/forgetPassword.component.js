import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

export default () => {

  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool
    });
  };

  const sendCode = event => {
    event.preventDefault();
    console.log('Stage 1')
    getUser().forgotPassword({
      onSuccess: data => {
        console.log("onSuccess:", data);
      },
      onFailure: err => {
        console.error("onFailure:", err);
      },
      inputVerificationCode: data => {
        console.log("Input code:", data);
        setStage(2);
      }
    });
  };

  const resetPassword = event => {
    event.preventDefault();
    console.log('Stage 2')
    if (password !== confirmPassword) {
      console.error("Passwords are not the same");
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: data => {
        console.log("onSuccess:", data);
      },
      onFailure: err => {
        console.error("onFailure:", err);
      }
    });
  };

  return (
    <div className="auth-inner">
    <h3>Forget Password</h3>
    <div>
      {stage === 1 && (
        <form onSubmit={sendCode}>
        
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        

        <button type="submit" className="btn btn-primary btn-block">
         Send verification code
        </button>
        
      </form>
      )}

      {stage === 2 && (
        
        <form onSubmit={resetPassword}>

        <div className="form-group">
        <label>Verification Code</label>
        <input
            type="text"
            className="form-control"
            value={code} onChange={event => setCode(event.target.value)}
        />
        </div>

        <div className="form-group">
        <label>Password</label>
        <input
            type="password"
            className="form-control"
            value={password}
                    onChange={event => setPassword(event.target.value)}
        />
        </div>

        <div className="form-group">
        <label>Confirm Password</label>
        <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
        />
        </div>


        <button type="submit" className="btn btn-primary btn-block">
        Change password
        </button>

        </form>
      )}
    </div>
    </div>
  );
};