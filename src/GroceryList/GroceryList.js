import React, { Component } from 'react';
import "./GroceryList.css";

export default class GroceryList extends Component {
    render() {
        return (
            <div id="grocerylist-div" className="project-div">
                <div className="project-info">
                    <p>Grocery List(placeholder)</p>
                    <a href="https://grocery-list1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <p>(use "(placeholder)" for both the username and password, or feel free to sign up!)</p>
                    <a href="https://github.com/TYohoJr/grocery-list" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/grocery-list-server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../project-images/placeholder.png")} alt="Grocery List" />
            </div>
        )
    }
}
