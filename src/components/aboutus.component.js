import React from "react";
import poster from '../images/cloudGaming.jpeg';
export default() => {
        const image = poster
        return (
            <div className="auth-inner">
                <h3>About Us</h3>
                <img style={{ objectFit: "cover", width: "100%" }} src={image} /><br/><br/>
                <p>Gaming industry is biggest business industry right now, And it is adapting with the current trends and technologies. It has adopted the environment of cloud and gained more exposure to the gaming community. Leveraging cloud environment it has reached to those gamer which were limited by their machine configurations, thus new concept of cloud gaming enabled new talents to reach the surfaces of gaming community. Keeping these in mind along with we started working on providing such service using which users can experience gaming limitless.</p>
            </div>
        );
}