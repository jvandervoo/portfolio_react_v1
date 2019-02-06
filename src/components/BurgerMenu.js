import React, { Component } from "react";
import "./BurgerMenu.scss";
import NavItem from "./NavItem";
import BioImage from "./BioImage";

export class BurgerMenu extends Component {
    render() {
        const { currentRoute } = this.props;
        return (
            <nav className="menu">
                <div className="menu-branding">
                    <BioImage />
                </div>
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
