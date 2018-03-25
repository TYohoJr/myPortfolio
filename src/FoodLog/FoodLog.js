import React, { Component } from 'react';
import "./FoodLog.css";

export default class FoodLog extends Component {
    render() {
        return (
            <div id="foodlog-div" className="project-div">
                <div className="project-info">
                    <p>Food Log info</p>
                    <a href="https://food-log1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <p>(use "(placeholder)" for the username and "(placeholder)" for the password, or feel free to sign up!)</p>
                    <a href="https://github.com/TYohoJr/food-log" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/food-log-server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../project-images/placeholder.png")} alt="Food Log" />
            </div>
        )
    }
}
