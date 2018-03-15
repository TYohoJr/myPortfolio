import React, { Component } from 'react';
import './App.css';
import Navbar2 from "./navbar/navbar.js";
import BikeApp from "./BikeApp/BikeApp.js";
import Dineamite from "./Dineamite/Dineamite.js";
import Aboutme from "./aboutme/aboutme.js";
import WeatherApp from "./WeatherApp/WeatherApp.js";

export default class App extends Component {
  constructor() {
    super();
    this.showBikeApp = this.showBikeApp.bind(this);
    this.showDineamite = this.showDineamite.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
    this.showWeatherApp = this.showWeatherApp.bind(this);
    this.state = {
      showProject: "",
      pageDescription: ""
    }
  }

  componentDidMount() {
    this.aboutMe();
  }

  aboutMe() {
    this.setState({
      showProject: "",
      pageDescription:
        <div>
          <Aboutme />
        </div>
    })
  }

  showBikeApp() {
    this.setState({
      pageDescription: <h1>Bike App</h1>,
      showProject: <BikeApp />

    })
  }

  showDineamite() {
    this.setState({
      pageDescription: <h1>Dine-amite (wip)</h1>,
      showProject: <Dineamite />
      
    })
  }

  showWeatherApp() {
    this.setState({
      pageDescription: <h1>Weather App (wip)</h1>,
      showProject: <WeatherApp />
      
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar2 aboutMe={this.aboutMe} showBikeApp={this.showBikeApp} showDineamite={this.showDineamite} 
        showWeatherApp={this.showWeatherApp}/>
        <div>{this.state.pageDescription}</div>
        <div>{this.state.showProject}</div>
        <footer>
          <div className="footer-contents">
          © Thomas Yoho 2018
          </div>
        </footer>
      </div>
    );
  }
}
