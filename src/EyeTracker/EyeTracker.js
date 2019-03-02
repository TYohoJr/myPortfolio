import React, { Component } from 'react';
import "./EyeTracker.css";

export default class EyeTracker extends Component {
    render() {
        return (
            <div id="eyetracker-div" className="project-div">
                <div className="project-info">
                    <p>
                        I created this Eye Tracker app to supplement myself during post cervical neck surgery. My neurologist has multiple eye tracking exercises through an app that is currently only available on iOS (Focus Builder).
                        Since I have Android instead of Apple I decided to recreate the app myself. I personally use this app every day during my eye/balance exercises. The exercises vary based on the stimuation the patient needs. 
                        I'm currently working on adding/re-creating every exercise that is available in the Focus Builder app. I'm adding as many customizable options as possible to better fine tune each exercise to the patients needs/wants.
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
