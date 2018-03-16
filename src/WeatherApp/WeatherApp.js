import React, { Component } from 'react';
import "./WeatherApp.css";

export default class WeatherApp extends Component {
    render() {
        return (
            <div id="weatheapp-div" className="project-div">
                <div className="project-info">
                    <p>This was the first app i created on my own. I created weather app to get a local forecast without all the ads and bloatware. You enter your 5 digit zip code into the input field. 
                        You then get a table with a current weather report, as well as corresponding images. Beneath that is a table with a short forecast.</p>
                    <a href="https://my-weather-app2.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <a href="https://github.com/TYohoJr/myWeatherApp" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
                <img className="project-image" src={require("../project-images/WeatherApp.png")} alt="Bike App" />
            </div>
        )
    }
}
