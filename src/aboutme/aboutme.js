import React, { Component } from 'react';
import "./aboutme.css";

export default class Aboutme extends Component {
    render() {
        return (
            <div id="about-me-div">
                <h1 id="about-me-header">Hello! My name is Thomas Yoho <small><sup>:)</sup></small></h1>
                <img id="about-me-pic" src={require("../project-images/fb-pic.jpg")} alt="me" />
                <p id="about-me-txt">I'm 25 years old and live in Schaumburg, IL.<br />
                    I'm a Web Developer who's always looking for the next challenge in my career.<br />
                    {/* I completed Montana Code School in 2018.<br /> */}
                    I completed <a href="https://montanacodeschool.com/" target="_blank" rel="noopener noreferrer">Montana Code School</a> in April 2018.<br/>
                    I have professional experience working on a team with other developers as well as with clients.<br /> <br/>
                    I have a fundamental knowledge of: <br />JavaScript, Angular, React, SQL Server, Node, C#, .Net, HTML, CSS, Redux, Express, Axios, MongoDB, postgreSQL, Git/GitHub/BitBucket and more.<br /> <br/>
                    My projects in the dropdown above make use of these technologies (including the site you're currently on)<br/>
                    Visit my LinkedIn profile to contact me</p>
            </div>
        )
    }
}
