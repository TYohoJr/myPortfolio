import React, { Component } from 'react';
import "./FoodLog.css";

export default class FoodLog extends Component {
    render() {
        return (
            <div id="foodlog-div" className="project-div">
                <div className="project-info">
                    <p>Carb Tracker was created to replicate food tracking apps, such as MyFitnessPal, but with specific focus on helping people on a carb diet. As well as having no advertisements without the need to pay for a subscription.
                        The front end is built using React and Redux, the back end is built from Express, and the data is being managed through a postgreSQL database. The app also makes use of axios for http calls and the Nutrionix API.
                        Security is maintained using Bcrypt and JsonWebTokens.
                    </p>
                    <a href="https://food-log1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <p>(use "test1" for the username and "test1" for the password, or feel free to sign up!)</p>
                    <a href="https://github.com/TYohoJr/food-log" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/food-log-server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../../project-images/FoodLog.png")} alt="Food Log" />
            </div>
        )
    }
}
