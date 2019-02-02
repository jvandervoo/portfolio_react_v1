import React, { Component } from "react";
import "./Home.scss";

export class Home extends Component {
    render() {
        return (
            <main id="home">
                <h1 class="lg-heading">
                    <span class="jasper"> Jasper</span>
                    <br />
                    <span class="text-secondary">
                        <span class="van">van</span>
                        <br />
                        <span class="der">der</span> <br />
                        <span class="voo"> voo</span>
                    </span>
                </h1>
                <h2 class="sm-heading">Front-End Developer</h2>
                <div class="icons-container">
                    <a href="#!">
                        <fa name="twitter" size="2x" />
                    </a>
                    <a href="#!">
                        <fa name="facebook" size="2x" />
                    </a>
                    <a href="#!">
                        <fa name="linkedin" size="2x" />
                    </a>
                    <a href="#!">
                        <fa name="github" size="2x" />
                    </a>
                </div>
            </main>
        );
    }
}

export default Home;
