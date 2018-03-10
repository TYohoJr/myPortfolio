import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar2 from "./navbar/navbar.js";
// import Projects from "./projects/projects.js";
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

componentDidMount(){
  this.aboutMe();
}

  aboutMe() {
    console.log("aboutMe was ran")
    this.setState({
      showProject:"",
      pageDescription:
        <div>
          <Aboutme />
          <p className="App-intro">
            Click on the "Projects" dropdown to see more details about each project
          </p>
        </div>
    })
  }

  showBikeApp() {
    console.log("showBikeApp was ran")
    this.setState({
      pageDescription: <h1>Bike App</h1>,
      showProject: <BikeApp />
     
    })
  }

  showDineamite() {
    console.log("showDineamite was ran")
    this.setState({
      showProject: <Dineamite />,
      pageDescription: <p>Dineamite Info</p>
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar2 aboutMe={this.aboutMe} showBikeApp={this.showBikeApp} showDineamite={this.showDineamite} />
        {/* <header className="App-header"> */}
          {this.state.pageDescription}
        {/* </header> */}
        {/* <p className="App-intro">
          Click on the "Projects" dropdown to see more details about each project
        </p> */}
        {/* <Projects/> */}
        {this.state.showProject}
        <p>© Thomas Yoho 2018</p>
      </div>
    );
  }
}
