import React, { Component } from 'react';
import './App.css';
import Navbar2 from "./navbar/navbar.js";
import BikeApp from "./BikeApp/BikeApp.js";
import Dineamite from "./Dineamite/Dineamite.js";
import Aboutme from "./aboutme/aboutme.js";

export default class App extends Component {
  constructor() {
    super();
    this.showBikeApp = this.showBikeApp.bind(this);
    this.showDineamite = this.showDineamite.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
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
      pageDescription: <h1>Dine-amite</h1>,
      showProject: <Dineamite />
      
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar2 aboutMe={this.aboutMe} showBikeApp={this.showBikeApp} showDineamite={this.showDineamite} />
        <div id="pageDescription-main">{this.state.pageDescription}</div>
        <div id="showProject-main">{this.state.showProject}</div>
        <footer>
          © Thomas Yoho 2018
        </footer>
      </div>
    );
  }
}
