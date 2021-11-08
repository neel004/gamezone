import ProgressBar from "./progress-bar.component";
import React, {useState,useEffect} from "react";
import './playgame.css'

export default() => {
    const [completed, setCompleted] = useState(0);
    const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
      ];
      
    useEffect(() => {
        setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
      }, []);
    

    return (
        <div>
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    </div>
    );

}