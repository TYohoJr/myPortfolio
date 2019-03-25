import React, { Component } from 'react';
import "./WeightTracker.css";

export default class WeightTracker extends Component {
    render() {
        return (
            <div id="weightapp-div" className="project-div">
                <div className="project-info">
                    <p>MVP created on March 22nd, 2019</p>
                    <p>
                        This simple weight tracker app is my first dive into mobile development. It features a simple graph of all your weight logs, as well as a chart of some of your goals/progress.
                        Logging is as simple as entering the log date and weight. You can also remove a specific log that you may have made on accident. All your data is stored locally to refrain from any unnecessary server calls.
                        Main technology used is React Native as well as some packages for displaying the graph. During deployment I learned some of the basic methods of building APK's, signing apps, and release/version management in Google Play Console.
                        Feel free to download and test it out!
                    </p>
                    <a href="https://play.google.com/store/apps/details?id=com.weightappapk" target="_blank" rel="noopener noreferrer">Download on Google Play Store</a>
                    <br />
                    <a href="https://github.com/TYohoJr/weightAppAPK" target="_blank" rel="noopener noreferrer">Code on GitHub</a>
                </div>
                <img className="project-image" src={require("../../project-images/WeightTracker1.png")} alt="Eye Tracker" />
                <img className="project-image" src={require("../../project-images/WeightTracker2.png")} alt="Eye Tracker" />
                <img className="project-image" src={require("../../project-images/WeightTracker3.png")} alt="Eye Tracker" />
            </div>
        )
    }
}
