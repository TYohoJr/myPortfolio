import React, { Component } from 'react';
import "./EyeTracker.css";

export default class EyeTracker extends Component {
    render() {
        return (
            <div id="eyetracker-div" className="project-div">
                <div className="project-info">
                    <p>
                        I created this Eye Tracker app to supplement myself during post cervical neck surgery. My neurologist has multiple eye tracking exercises through an app that is currently only available on iOS.
                        Since I have Android instead of Apple I decided to recreate the app myself. I personally use this app every day during my eye/balance exercises. The basic idea is to focus on the center dot and then quickly and fluently jump your eyes to the flashing dot.
                        I've a couple customization options to better fine tune the exercise.
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
