import React, { Component } from 'react';
import "./BakerySite.css";

export default class BakerySite extends Component {
    render() {
        return (
            <div id="bakerysite-div" className="project-div">
                <div className="project-info">
                    <p>This bakery site, titled "The Cake Lady" was created as a main site for my mothers soon<sup>TM</sup> to exist cake business. She has been talking about it for years, so I decided to use my coding skills to build her a fully functional website from the ground up.
                    The navbar features basic information about the business. The home page features a map with an input field for a potential customer to enter their address and get distance as well as directions from them to the business location.
                    This is made using the Google Maps API. The pricing page allows the user to pick a variety of options for a potential cake in order to get a price estimate. This features modals that includes things such as a size calculator, the same directions component reused, as well as a reset button to start over.
                    The order page features a form to fill out to place an order for a cake. The order placement is contigent on a successful deposit of 10 dollars. This deposit is made using the paypal API. Upon a successful deposit the form is submitted and saved into a SQL database (elephantSQL).
                    The final page displays examples of previous cakes. Themain technologies used are React, Redux, Node, Express, SQL/elephantSQL, Google API, PayPal API, and ReactStrap.</p>
                    <a href="https://bakery-site.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                    <br />
                    <a href="https://github.com/TYohoJr/bakerySite" target="_blank" rel="noopener noreferrer">Front-End Code</a>
                    <br />
                    <a href="https://github.com/TYohoJr/bakerySite-server" target="_blank" rel="noopener noreferrer">Back-End Code</a>
                </div>
                <img className="project-image" src={require("../project-images/BakerySite.png")} alt="Bakery Site" />
            </div>
        )
    }
}
