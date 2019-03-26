import React, { Component } from 'react';
import "./EyeTracker.css";

export default class EyeTracker extends Component {
    render() {
        return (
            <div id="eyetracker-div" className="project-div">
                <div className="project-info">
                    <p>MVP created on March 15th, 2019</p>
                    <p>
                        I created this Eye Tracker app to supplement myself during post cervical neck surgery. My neurologist has multiple eye tracking exercises through an app that is currently only available on iOS (Focus Builder).
                        Since I have Android instead of Apple I decided to recreate the app myself. I personally use this app every day during my eye/balance exercises. The exercises vary based on the stimulation the patient needs.
                        It features a login option to save your options for each exercise. Main technologies used are React, Redux, Express, Node, Bootstrap and MongoDB.
                    </p>
                    <a href="https://eye-tracker-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <a href="https://github.com/TYohoJr/eyeTracker" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/eyeTracker-server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../../project-images/EyeTracker.png")} alt="Eye Tracker" />
            </div>
        )
    }
}
