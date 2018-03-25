import React, { Component } from 'react';
import "./SiteGenerator.css";

export default class SiteGenerator extends Component {
    render() {
        return (
            <div id="sitegenerator-div" className="project-div">
                <div className="project-info">
                    <p>Site Generator info</p>
                    <a href="https://site-generator1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <p>(use "(placeholder)" for the username and "(placeholder)" for the password, or feel free to sign up!)</p>
                    <a href="https://github.com/TYohoJr/site-generator" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/site-generator-server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../project-images/placeholder.png")} alt="Site Generator" />
            </div>
        )
    }
}
