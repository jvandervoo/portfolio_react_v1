import React, { Component } from "react";
import "./BurgerMenu.scss";
import NavItem from "./NavItem";

export class BurgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRoute: "",
        };
    }

    render() {
        return (
            <nav className="menu">
                <div className="menu-branding">
                    <div className="portrait" />
                </div>
                <ul className="menu-nav">
                    {console.log(this.props.location.pathname)}
                    <NavItem route="/" displayName="Home" />
                    <NavItem route="/about" displayName="About" />
                    <NavItem route="/projects" displayName="Projects" />
                    <NavItem route="/contact" displayName="Contact" />
                </ul>
            </nav>
        );
    }
}

export default BurgerMenu;
