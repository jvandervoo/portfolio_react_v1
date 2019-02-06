import React, { Component } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
                    <a href="https://linkedin.com/in/jvandervoo" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/jvandervoo" rel="noopener noreferrer" target="_blank">
                        <FaGithub />
                    </a>
                </div>
            </div>
        );
    }
}

export default Home;
