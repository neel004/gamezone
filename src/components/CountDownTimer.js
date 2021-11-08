import React,{useState} from 'react'
import './countDown.css'
const CountDownTimer = ({hoursMinSecs}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    
    const [setIP] = useState("");
    const [setKey] = useState("");
    
    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0){
            const UserID = localStorage.getItem("user")
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({UserID})
            };
            console.log(requestOptions);
            fetch('https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/game',requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)  
                });
            delete localStorage.ip
            delete localStorage.key
            delete localStorage.min
            delete localStorage.hr
            delete localStorage.time
            setIP(false)
            setKey(false)
            reset()
        }
        
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div  >
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;