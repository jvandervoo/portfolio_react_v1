import React, { Component } from "react";
import "./Home.scss";

export class Home extends Component {
    render() {
        return (
            <main id="home">
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
                        <i className="fab fa-linkedin fa-2x"> </i>
                    </a>
                    <a href="#!">
                        <i className="fab fa-github fa-2x"> </i>
                    </a>
                </div>
            </main>
        );
    }
}

export default Home;
