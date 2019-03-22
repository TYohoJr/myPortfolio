import React, { Component } from 'react';
import "./GroceryList.css";

export default class GroceryList extends Component {
    render() {
        return (
            <div id="grocerylist-div" className="project-div">
                <div className="project-info">
                    <p>Grocery List came to fruition when i got tired of texting my sister and brother-in-law asking if they needed anything when I was at the store. 
                        With the app you can signup/login and then add to a list that is tied to your login and saved to a database (mLab). 
                        That way anyone who has the login info can add to the list. Then when someone is at the store they can simply login and see what everyone needs. 
                        The base functionality is currently implemented in the app, but the fine tuning and visuals will be completed after I complete Code School.</p>
                    <a href="https://grocery-list1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <p>(use "Test1" for the username and "Password1" for the password, or feel free to sign up!)</p>
                    <a href="https://github.com/TYohoJr/grocery-list" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/grocery-list-server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../../project-images/GroceryList.png")} alt="Grocery List" />
            </div>
        )
    }
}
