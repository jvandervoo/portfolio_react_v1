import React, { Component } from "react";
import "./Main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import BurgerMenu from "./BurgerMenu";

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <BurgerMenu />
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Projects} />
                </div>
            </Router>
        );
    }
}

export default Main;
