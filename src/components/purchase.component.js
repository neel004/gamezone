import React from "react";

import './purchase.css'

export default() => {

        const onSubmit = async event => {
                event.preventDefault();
                // console.log(event.target[0].value)
                // send above value to the lambda for getting perticular ruppees as in order id.
                event.persist();
                // console.log(event)
                fetch('https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/sign-up?ammount='+event.target[0].value)
                .then(response => response.json())
                .then(body => {
                    console.log(body.data.id);       
                    // razorpayHandler(body.data.id);
                    var options = {
                        "key": "rzp_test_vz2Hq2JEIkQRcy", // Enter the Key ID generated from the Dashboard
                        "amount": "10000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        "currency": "INR",
                        "name": "Gamezone",
                        "description": "Test Transaction",
                       // "image": "https://example.com/your_logo",
                        "order_id": body.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                        "handler": function (response){
                            alert("success!!")
                            console.log(response.razorpay_payment_id);
                            console.log(response.razorpay_order_id);
                            console.log(response.razorpay_signature);
                            if(localStorage.getItem("user")){
                            const uid = localStorage.getItem("user");
                            console.log(uid);
                            const requestOptions = {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({"uid" : uid})
                            };
                            
                            console.log(requestOptions);
                            fetch('https://prln8vmlkf.execute-api.us-east-1.amazonaws.com/v1/sign-up',requestOptions)
                                .then(response => response.json())
                                .then(data => console.log(data));
                        }
                        },
                        // "prefill": {
                        //     "name": "Dhruvil Patel",
                        //     "email": "neelp004@gmail.com",
                        //     "contact": "9999999999"
                        // },
                        "notes": {
                            "address": "Razorpay Corporate Office"
                        },
                        "theme": {
                            "color": "#3399cc"
                        }
                    };
                    var rzp1 = new window.Razorpay(options);
                    rzp1.open();
                    rzp1.on('payment.failed', function (response){
                        alert("Error Occured!! Contact Support Team for Assistance.")
                            console.log(response.error.code);
                            console.log(response.error.description);
                            console.log(response.error.source);
                            console.log(response.error.step);
                            console.log(response.error.reason);
                            console.log(response.error.metadata.order_id);
                            console.log(response.error.metadata.payment_id);
                    });
                });
            };

        return (<div className="inner">
            <div className="background">
  <div className="container">
  
    <div className="panel pricing-table">
    <form onSubmit={onSubmit}>
      <div className="pricing-plan">
        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Newbii</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">30 Minutes gamePlay</li>
          <li className="pricing-features-item pricing-features-dimed">Session Storage</li>
          <li className="pricing-features-item pricing-features-dimed">Failover Safety</li>
          <li className="pricing-features-item pricing-features-dimed">Lowest FPS</li>
        </ul>
        <span className="pricing-price">₹50</span>
        <button type="submit" className="pricing-button" value="25">Buy</button>
      </div>
      </form>
      <form onSubmit={onSubmit}>
      <div className="pricing-plan">
        <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Pro</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">3 hrs of gamePlay</li>
          <li className="pricing-features-item">Lowest FPS</li>
          <li className="pricing-features-item">Session Storage</li>
          <li className="pricing-features-item pricing-features-dimed">Failover Safety</li>
        </ul>
        <span className="pricing-price">₹150</span>
        <button type="submit" className="pricing-button" value="150">Buy</button>
      </div>
      </form>
      <form onSubmit={onSubmit}>
      <div className="pricing-plan">
        <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" className="pricing-img"/>
        <h2 className="pricing-header">Legendary</h2>
        <ul className="pricing-features">
          <li className="pricing-features-item">Dedicated Server</li>
          <li className="pricing-features-item">Unlimited Gameplay</li>
          <li className="pricing-features-item">Failover Safety and Session storage</li>
          <li className="pricing-features-item">Lowest FPS</li>
        </ul>
        <span className="pricing-price">₹400</span>
        <button type="submit" className="pricing-button" value="400">Buy</button>
      </div>
      </form>
    </div>
    
  </div>
</div>
                {/* <form onSubmit={onSubmit}>
                    <h3>Purchase Minutes</h3>

                    <button type="submit" className="btn btn-primary btn-block">Buy Minutes</button>
                    <p className="message"></p>
                </form> */}
                </div>
            );
    
}
