import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.scss";

export class BurgerMenu extends Component {
    render() {
        return (
            <nav className="menu">
                <div className="menu-branding">
                    <div className="portrait" />
                </div>
                <ul className="menu-nav">
                    <li className="nav-item">
                        <div className="nav-link">
                            <Link to="/">Home</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <Link to="/about">About</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <Link to="/projects">Projects</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">
                            <Link to="/contact">Contact</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default BurgerMenu;
