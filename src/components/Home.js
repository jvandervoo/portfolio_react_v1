import React, { Component } from "react";
import { FaLinkedin, FaGit } from "react-icons/fa";
import "./Home.scss";

export class Home extends Component {
    render() {
        return (
            <div id="home">
                <h1 className="lg-heading">
                    <span className="jasper"> Jasper</span>
                    <br />
                    <span className="text-secondary">
                        <span className="van">van</span>
                        <br />
                        <span className="der">der</span> <br />
                        <span className="voo"> voo</span>
                    </span>
                </h1>
                <h2 className="sm-heading">Front-End Developer</h2>
                <div className="icons-container">
                    <a href="#!">
                        <FaLinkedin />
                    </a>
                    <a href="#!">
                        <FaGit />
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;
