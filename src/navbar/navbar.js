import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import "./navbar.css";

export default class Navbar2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div id="navbar">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><button id="about-me-btn" onClick={this.props.aboutMe}>About Me</button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/TYohoJr/" target="_noblank">Github</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/thomas-yoho-6a0224a5/" target="_noblank">LinkedIn</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Projects
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem onClick={this.props.showDineamite}>
                    Dine-amite
                  </DropdownItem>
                  <DropdownItem onClick={this.props.showBakerySite}>
                    Bakery Site
                  </DropdownItem>
                   <DropdownItem onClick={this.props.showFoodLog}>
                    Food Log
                  </DropdownItem>
                  <DropdownItem onClick={this.props.showWeatherApp}>
                    Weather App
                  </DropdownItem>
                  {/* <DropdownItem onClick={this.props.showBikeApp}>
                    Bike App
                  </DropdownItem> */}
                  {/* <DropdownItem onClick={this.props.showGroceryList}>
                    Grocery List
                  </DropdownItem> */}
                 
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
