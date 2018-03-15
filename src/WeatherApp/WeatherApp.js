import React, { Component } from 'react';
import "./WeatherApp.css";

export default class WeatherApp extends Component {
    render() {
        return (
            <div id="weatheapp-div" className="project-div">
                <div className="project-info">
                    <p>(TBA)</p>
                    <a href="https://my-weather-app2.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <a href="https://github.com/TYohoJr/myWeatherApp" target="_blank" rel="noopener noreferrer">Code</a>
                </div>
                <img className="project-image" src={require("../project-images/WeatherApp.png")} alt="Bike App" />
            </div>
        )
    }
}
