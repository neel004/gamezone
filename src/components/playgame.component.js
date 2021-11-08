import React, {useState,useEffect} from "react";
import CountDownTimer from './CountDownTimer';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './playgame.css'
import './countDown.css'

import ProgressBar from "./progress-bar.component";

export default()=>{
    const testData = [
        // { bgcolor: "#6a1b9a", completed: 60 },
        // { bgcolor: "#00695c", completed: 30 },
        // { bgcolor: "#ef6c00", completed: 53 },
        // { bgcolor: "#ef6c00", completed: 100 },
      ];
    const [isStart, setIsStart] = useState(false)
    const [isVisibleStop, setIsVisibleStop] = useState(false)
    const [bgcolor, setBgColor] = useState("")
    const [completed, setCompleted] = useState(0)
    useEffect(() => {
        const ip = localStorage.getItem('ip')
        const key = localStorage.getItem('key')
        if (ip) {
          setIP(ip)
          setKey(key)
        }

        const timer = localStorage.getItem('time')
          if (timer) {
            const UserID = localStorage.getItem("user")
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({"UserID" : UserID})
            };
            
            console.log(requestOptions);
            fetch('https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/game',requestOptions)
                    .then(response => response.json())
                    .then(data => {console.log(data)
                        setIsVisibleStop(true)
                        
                        var x = data.data;
                        console.log(x)
                        var int_part = Math.trunc(x); // returns 3
                        console.log(int_part)
                        //var hours = parseInt(int_part/60);
                        let hours = Math.floor(x / 60);
                        console.log(hours)
                        var float_part = Number((x-int_part).toFixed(2)); // return 0.2
                        console.log(float_part)
                        //var minutes = parseInt(float_part*60);
                        let minutes = parseInt(x % 60);
                        console.log(minutes)
                        setTime({hours, minutes, seconds: 0})
                        localStorage.setItem("time",true)
                        localStorage.setItem("min",minutes)
                        localStorage.setItem("hr",hours)
                    });
                }
    }, [])
    const [IP, setIP] = useState("");
    const [Key, setKey] = useState("");
    const [time, setTime] = useState("");
    // useEffect(() => {
    //     const timer = localStorage.getItem('time')
    //       if (timer) {
    //         const UserID = localStorage.getItem("user")
    //         const requestOptions = {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({"UserID" : UserID})
    //         };
            
    //         console.log(requestOptions);
    //         fetch('https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/game',requestOptions)
    //                 .then(response => response.json())
    //                 .then(data => {console.log(data)
    //                     var x = data.data;
    //                     console.log(x)
    //                     var int_part = Math.trunc(x); // returns 3
    //                     console.log(int_part)
    //                     //var hours = parseInt(int_part/60);
    //                     let hours = Math.floor(x / 60);
    //                     console.log(hours)
    //                     var float_part = Number((x-int_part).toFixed(2)); // return 0.2
    //                     console.log(float_part)
    //                     //var minutes = parseInt(float_part*60);
    //                     let minutes = parseInt(x % 60);
    //                     console.log(minutes)
    //                     setTime({hours, minutes, seconds: 0})
    //                     localStorage.setItem("time",true)
    //                     localStorage.setItem("min",minutes)
    //                     localStorage.setItem("hr",hours)
    //                 });
            
    //       }
    // }, [])

    const startGame = async event => {
        event.preventDefault();
        setIsStart(true)
        const UserID = localStorage.getItem("user")
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({UserID})
        };
        console.log(requestOptions);
        await fetch('https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/sign-in',requestOptions)
            .then(response => response.json())
            .then(async data => {
                console.log(data.data)
                setBgColor("#00695c");
                setCompleted(30);
                testData.push({bgcolor,completed})
                await new Promise(resolve => setTimeout(resolve, 240000));
                fetch('https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/game?UserId='+UserID)
                    .then(response2 => response2.json())
                    .then(data2 => {
                        console.log(data2.data);
                        const pp = document.getElementById("ip");
                        pp.value = "IP: "+data.data;
                        const pp2 = document.getElementById("key");
                        pp2.value = "Password: "+data2.data;
                        localStorage.setItem('ip',data.data);
                        localStorage.setItem('key',data2.data);
                        setIP(data.data);
                        setKey(data2.data);
                        testData.pop();
                        setBgColor("#6a1b9a");
                        setCompleted(60);
                        testData.push({bgcolor,completed})
                        const requestOptions = {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({"UserID" : UserID})
                        };
                        
                        console.log(requestOptions);
                        fetch('https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/game',requestOptions)
                                .then(response => response.json())
                                .then(data => {console.log(data)
                                    setIsVisibleStop(true)
                                    // document.getElementById("start").style.display='none';
                                    var x = data.data;
                                    testData.pop();
                                    setBgColor("#00695c");
                                    setCompleted(100);
                                    testData.push({bgcolor,completed})
                                    console.log(x)
                                    var int_part = Math.trunc(x); // returns 3
                                    console.log(int_part)
                                    //var hours = parseInt(int_part/60);
                                    let hours = Math.floor(x / 60);
                                    console.log(hours)
                                    var float_part = Number((x-int_part).toFixed(2)); // return 0.2
                                    console.log(float_part)
                                    //var minutes = parseInt(float_part*60);
                                    let minutes = parseInt(x % 60);
                                    console.log(minutes)
                                    setTime({hours, minutes, seconds: 0})
                                    localStorage.setItem("time",true)
                                    localStorage.setItem("min",minutes)
                                    localStorage.setItem("hr",hours)
                                });

                        
                        
                        });
            });
        

            
    };

    const stopGame = event => {
        event.preventDefault();
        setTime(false)
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
                setIsVisibleStop(false)
                
            });
        delete localStorage.ip;
        delete localStorage.key;
        delete localStorage.min
        delete localStorage.hr
        delete localStorage.time
        setIP(false)
        setKey(false)
        setIsStart(false)

        // document.getElementById("stop").style.display='none';
        // document.getElementById("start").style.display='initial';
    };

    return (
        <div className="auth-inner">
        <h3>Play Game</h3>
        
        {time ? <div className="borderexample"><CountDownTimer hoursMinSecs={time}/></div> : <div></div>}
        {!isVisibleStop && <form onSubmit={startGame}>
            <button type="submit" className="btn btn-primary btn-block" id="start">Play</button>
            
            <br></br>
            {/* <CopyToClipboard text={localStorage.getItem("ip")}>
            <button>Copy to clipboard</button>
            </CopyToClipboard>
            <input id="price_from" value="price from " disabled="disabled"> */}
           
           {/* <p className="ip" id="ip"></p> */}
            
            {/* <p className="password" id="password"></p> */}
        </form>}
        {isStart && <ProgressBar  bgcolor={bgcolor} completed={completed} /> }
        {isStart && <p>Note: It will take around 4 minutes to run the cloud machine</p>}
        {IP ? <div className="form-group">
            <label>IP : </label>
            <input id="ip" value={IP} disabled="disabled"></input>
        </div> : <div className="form-group">
            <label>IP :    </label>
            <input id="ip" value="" disabled="disabled"></input>
        </div>}
        
        {IP ? <div><CopyToClipboard text={localStorage.getItem("ip")}>
            <button className="btn btn-primary">Copy IP</button>
            </CopyToClipboard><br/><br/>
            </div> : <div />}
            

        {Key ?  <div className="form-group">
            <label>Password :   </label>
            <input id="key" value={Key} disabled="disabled"></input>
        </div> :  <div className="form-group">
            <label>Password :   </label>
            <input id="key" value="" disabled="disabled"></input>
            <br/><br/>
        </div>}

        {Key ? <div><CopyToClipboard text={localStorage.getItem("key")}>
        <button className="btn btn-primary">Copy Password</button>
        </CopyToClipboard>
        <br/><br/></div> : <div />}
        {/* {isVisibleStop &&   */}
            {/* console.log(testData) */}
            {/* {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))} */}
        {/* } */}
        
        {isVisibleStop && <form onSubmit={stopGame}>
        <button type="submit" className="btn btn-primary btn-block" id="stop">Stop Game</button>
        </form>}
        </div>
    );

}
