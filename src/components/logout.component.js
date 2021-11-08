import React, { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import './logout.css'
export default() =>{
    const {setShowProfile} = useContext(LoginContext)
    
    delete localStorage.showProfile
    delete localStorage.user
    setShowProfile(false)
    window.location.href = "https://gamezone.auth.us-east-1.amazoncognito.com/logout?client_id=33j71htshrgj2jm6uir8u00ia8&logout_uri=https://gamezone004.herokuapp.com/sign-in/"
     return (<></>);
}