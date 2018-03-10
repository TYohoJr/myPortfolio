import React, { Component } from 'react';
import "./aboutme.css";

export default class Aboutme extends Component {
    render() {
        return (
            <div id="about-me-div">
                
                <h1 id="about-me-header">Hello! My name is Thomas Yoho <small><sup>:)</sup></small></h1>
                <img id="my-pic" src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/12439539_10154534143044899_7525846484198515008_n.jpg?oh=3b5d624655616db46137edd0b048caa9&oe=5B082169" alt="me"/>
                <br/>
                <p id="about-me-txt">I'm 24 years old and live in Manhattan, MT. Im an aspiring programmer looking to get into a junior dev postion.<br/>
                     I completed Montana Code School in 2018.<br/>
                     I have a fundamental knowledge of: <br/>JavaScript, HTML, CSS, React, Express, NodeJs, MongoDB, Git/GitHub<br/>
                     My projects in the dropdown above make use of these technologies (inclding the site your currently on)</p>
            </div>
        )
    }
}
