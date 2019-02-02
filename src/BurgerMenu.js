import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BurgerMenu extends Component {
    render() {
        return (
            <nav class="menu">
                <div class="menu-branding">
                    <div class="portrait" />
                </div>
                <ul class="menu-nav">
                    <li class="nav-item">
                        <div class="nav-link">
                            <Link to="/">Home</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">
                            <Link to="/about">About</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">
                            <Link to="/projects">Projects</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">
                            <Link to="/contact">Contact</Link>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default BurgerMenu;
