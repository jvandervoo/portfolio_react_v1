import React, { Component } from "react";
import "./BurgerMenu.scss";
import NavItem from "./NavItem";

export class BurgerMenu extends Component {
	render() {
		const { currentRoute, toggleMenu } = this.props;
		return (
			<nav className="menu">
				<div onClick={toggleMenu} className="menu-wrapper" />
				<ul key={"blah"} className="menu-nav">
					<NavItem toggleMenu={toggleMenu} route="/" displayName="Home" currentRoute={currentRoute} />
					<NavItem toggleMenu={toggleMenu} route="/about" displayName="About" currentRoute={currentRoute} />
					<NavItem
						toggleMenu={toggleMenu}
						route="/projects"
						displayName="Projects"
						currentRoute={currentRoute}
					/>
					<NavItem
						toggleMenu={toggleMenu}
						route="/contact"
						displayName="Contact"
						currentRoute={currentRoute}
					/>
				</ul>
			</nav>
		);
	}
}

export default BurgerMenu;
