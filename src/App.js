import React, {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from './contexts/LoginContext';
import Header1 from "./components/header1.component";
import Header2 from "./components/header2.component";

function App() {
  
  useEffect(() => {
      const item = localStorage.getItem('showProfile')
      if (item) {
        setShowProfile(item)
      }
      
  }, [])
  const [showProfile, setShowProfile] = useState("");
  const [username, setUsername] = useState("");
  return (
  <div className="App">
    <LoginContext.Provider value={{username , setUsername, setShowProfile}}>
  {showProfile ? <Header2 /> : <Header1 />}
  </LoginContext.Provider> 
  </div>);
}

export default App;
