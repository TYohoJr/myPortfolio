import React, { Component } from 'react';
import './App.css';
import Navbar2 from "./navbar/navbar.js";
import BikeApp from "./BikeApp/BikeApp.js";
import Dineamite from "./Dineamite/Dineamite.js";
import Aboutme from "./aboutme/aboutme.js";
import WeatherApp from "./WeatherApp/WeatherApp.js";
import GroceryList from "./GroceryList/GroceryList.js";
import FoodLog from "./FoodLog/FoodLog.js";
import BakerySite from "./BakerySite/BakerySite.js";
import EyeTracker from "./EyeTracker/EyeTracker.js";
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.showBikeApp = this.showBikeApp.bind(this);
    this.showDineamite = this.showDineamite.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
    this.showWeatherApp = this.showWeatherApp.bind(this);
    this.showGroceryList = this.showGroceryList.bind(this);
    this.showFoodLog = this.showFoodLog.bind(this);
    this.showBakerySite = this.showBakerySite.bind(this);
    this.showEyeTracker = this.showEyeTracker.bind(this);
    this.state = {
      showProject: null,
      pageDescription: null
    }
  }

  componentDidMount() {
    axios.post('/siteVisit', { date: new Date().toLocaleString() }).then((result) => {
      console.log(result)
    })
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
      pageDescription: <h1>Dine-amite</h1>,
      showProject: <Dineamite />

    })
  }

  showWeatherApp() {
    this.setState({
      pageDescription: <h1>Weather App</h1>,
      showProject: <WeatherApp />

    })
  }

  showGroceryList() {
    this.setState({
      pageDescription: <h1>Grocery List (wip)</h1>,
      showProject: <GroceryList />

    })
  }

  showFoodLog() {
    this.setState({
      pageDescription: <h1>Carb Tracker (wip)</h1>,
      showProject: <FoodLog />

    })
  }

  showBakerySite() {
    this.setState({
      pageDescription: <h1>Bakery Site</h1>,
      showProject: <BakerySite />

    })
  }

  showEyeTracker() {
    this.setState({
      pageDescription: <h1>Eye Tracker</h1>,
      showProject: <EyeTracker />

    })
  }

  render() {
    return (
      <div className="App">
        <Navbar2 aboutMe={this.aboutMe} showBikeApp={this.showBikeApp}
          showDineamite={this.showDineamite} showWeatherApp={this.showWeatherApp}
          showGroceryList={this.showGroceryList} showFoodLog={this.showFoodLog}
          showBakerySite={this.showBakerySite} showEyeTracker={this.showEyeTracker} />
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
