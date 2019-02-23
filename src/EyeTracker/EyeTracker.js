import React, { Component } from 'react';
import "./EyeTracker.css";

export default class EyeTracker extends Component {
    render() {
        return (
            <div id="eyetracker-div" className="project-div">
                <div className="project-info">
                    <p>
                        Test
                    </p>
                    <a href="https://eye-tracker-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <a href="https://github.com/TYohoJr/eyeTracker" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/eyeTracker-server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../project-images/EyeTracker.png")} alt="Eye Tracker" />
            </div>
        )
    }
}
