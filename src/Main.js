import React, { Component } from "react";
import "./Main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import BurgerMenu from "./components/BurgerMenu";
import BurgerMenuButton from "./components/BurgerMenuButton";

//Make navlinks an array of objects and loop to create them.

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { showMenu: false };
    }

    handleClick = () => this.setState({ showMenu: !this.state.showMenu });

    render() {
        const showMenu = this.state.showMenu ? <BurgerMenu /> : "";

        return (
            <Router>
                <div>
                    <BurgerMenuButton showMenu={this.state.showMenu} handleClick={this.handleClick} />
                    {showMenu}
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Projects} />
                </div>
            </Router>
        );
    }
}

export default Main;
