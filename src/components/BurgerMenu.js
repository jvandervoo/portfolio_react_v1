import React, { Component } from "react";
import "./BurgerMenu.scss";
import NavItem from "./NavItem";

export class BurgerMenu extends Component {
    render() {
        const { currentRoute, toggleMenu } = this.props;
        return (
            <nav className="menu">
                <div onClick={toggleMenu} className="menu-wrapper"></div>
                <ul className="menu-nav">
                    <NavItem route="/" displayName="Home" currentRoute={currentRoute} />
                    <NavItem route="/about" displayName="About" currentRoute={currentRoute} />
                    <NavItem route="/projects" displayName="Projects" currentRoute={currentRoute} />
                    <NavItem route="/contact" displayName="Contact" currentRoute={currentRoute} />
                </ul>
            </nav>
        );
    }
}

export default BurgerMenu;
