import React, { Component } from 'react';
import "./BikeApp.css";

export default class BikeApp extends Component {
    render() {
        return (
            <div id="bike-app-div" className="project-div">
                <div className="project-info">
                    <p >Bike App was created during my time at Montana Code School.
                        The user can sign up and enter their work address. Their password is encrypted and upon login they are assigned a token which is stored locally on the client's end.
                        After they sign in a map with their current location shows on the screen.
                        The user can then click "Get Me To Work!" to show a route from their current location to their work. The map has a bike layer on top to promote biking over driving.
                        <b>Unfortunately, Google has recently incresed their security on what kind of sites can use their geolocation, so this app temporarily is not functional, until I can find an alternative. </b>
                        Group work finished on 3-6-18 and I make commits periodically.</p>
                    <a href="https://stark-scrubland-94670.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <p>(use "test" for both the username and password, or feel free to sign up!)</p>
                    <a href="https://github.com/TYohoJr/bikeApp2" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br/>
                    <a href="https://github.com/TYohoJr/bikeapp2backend" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../project-images/BikeApp.png")} alt="Bike App" />
            </div>
        )
    }
}
