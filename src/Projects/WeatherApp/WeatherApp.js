import React, { Component } from 'react';
import "./WeatherApp.css";

export default class WeatherApp extends Component {
    render() {
        return (
            <div id="weatheapp-div" className="project-div">
                <div className="project-info">
                    <p>I created weather app to get a local forecast without all the ads and bloatware. You can pick from a dropdown list of Montana based cities and get a small weather report. 
                        You can also enter your 5 digit zip code into the input field. 
                        You then get a table with a current weather report, as well as corresponding images based on the current conditions.</p>
                    <a href="https://my-weather-app2.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <a href="https://github.com/TYohoJr/myWeatherApp" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
                <img className="project-image" src={require("../../project-images/WeatherApp.png")} alt="Bike App" />
            </div>
        )
    }
}
