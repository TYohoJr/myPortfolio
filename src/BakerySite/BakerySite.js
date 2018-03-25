import React, { Component } from 'react';
import "./BakerySite.css";

export default class BakerySite extends Component {
    render() {
        return (
            <div id="bakerysite-div" className="project-div">
                <div className="project-info">
                    <p>Bakery Site info</p>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <p>(use "(placeholder)" for the username and "(placeholder)" for the password, or feel free to sign up!)</p>
                    <a href="https://github.com/TYohoJr/" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../project-images/placeholder.png")} alt="Bakery Site" />
            </div>
        )
    }
}
