import React, { Component } from 'react';
import "./Dineamite.css";

export default class Dineamite extends Component {
    render() {
        return (
            <div id="dineamite-div">
                <p id="dineamite-info">Future Dineamite info</p>
                <a href="https://dine-amite.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                <br />
                <p>(use "test3" for both the username and password, or feel free to sign up!)</p>
                <a href="https://github.com/TYohoJr/OurVerySpecialApp" target="_blank" rel="noopener noreferrer">Base Code</a>
                <br />
                <a href="https://github.com/TYohoJr/OurVerySpecialApp-Server" target="_blank" rel="noopener noreferrer">Server Code</a>
                <br />
                <div id="dineamite-img" >
                    <img src={require("../project-images/Dineamite.png")} alt="Bike App" />
                </div>
            </div>
        )
    }
}
