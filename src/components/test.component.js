import React, {useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

var jwt = require("jsonwebtoken");
export default (props) => {
  var email = null;
  var name = null;
  const getuid = () => {
    console.log(name);
    fetch(
      "https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/sign-in?uid=" +
        email+"&name="+name
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  // console.log("idtoken")
  const code = new URLSearchParams(props.location.hash).get("id_token");
  // console.log(code);
  const getHeaderFromToken = async (token) => {
    const decodedToken = jwt.decode(token, {
      complete: true,
    });
    if (!decodedToken) {
      console.log("provided token does not decode as JWT");
    }
    console.log(decodedToken.payload)
    // console.log(decodedToken.payload.email)
    email = decodedToken.payload.email;
    name = decodedToken.payload.family_name;
    console.log(name)
    await getuid();
    return decodedToken.header;
  };
  const headder = getHeaderFromToken(code);
  const { setUsername, setShowProfile } = useContext(LoginContext);
  //setUsername(email)
  setShowProfile(true);
  localStorage.setItem("showProfile", true);
  localStorage.setItem("user", email);
  const onSubmit = (event) => {
    event.preventDefault();
    window.location.href =
      "https://gamezone.auth.us-east-1.amazoncognito.com/logout?client_id=33j71htshrgj2jm6uir8u00ia8&logout_uri=http://localhost:3000/sign-in/";
  };
  return (
    <div>
      <h3>test page</h3>
      <form onSubmit={onSubmit}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

