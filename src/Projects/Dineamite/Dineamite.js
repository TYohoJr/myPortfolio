import React, { Component } from 'react';
import "./Dineamite.css";

export default class Dineamite extends Component {
    render() {
        return (
            <div id="dineamite-div" className="project-div">
                <div className="project-info">
                    <p>Dineamite was created by a team of 3 people while at Montana Code School. The user can sign up and enter their phone number.
                        They can sign up for daily text alerts that link them to the site, which then has the daily specials for 3 popular lunch places.
                        The user can sign up for each of the 3 individually, stop all text alerts at once, and send a test sms message if they wish.
                        Each location has 3 buttons which can: sign up for text alerts, go to their website, or view reviews.
                        The second tab has 3 facebook feeds of local music venues. The user can also subscribe to daily texts for these venues. 
                        The third tab has local daily specials based on the day of the week
                        {/*You can click the name of the place to make a map appear giving you directions there from your current location.*/} 
                        . After signing in a user profile appears in the top left, showing their username, number, and what texts they are currently subscried to.<br/>
                        Group work finished on 3-28-18</p>
                    <a href="https://dine-amite.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <p>(use "test1" for both the username and password, or feel free to sign up!)<br/>
                    Please note that due to using the free version of Twilio, only numbers that are manually verified can recieve texts :(</p>
                    <a href="https://github.com/TYohoJr/OurVerySpecialApp" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/OurVerySpecialApp-Server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../../project-images/Dineamite.png")} alt="Bike App" />
            </div>
        )
    }
}
