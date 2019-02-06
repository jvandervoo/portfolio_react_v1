import React, { Component } from "react";
import "./About.scss";
export class About extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <h1 className="lg-heading">About</h1>
                <h2 className="sm-heading">Here's some info about me and why I'm here</h2>
                <div className="about-info">
                    <div className="bio-image" />
                    <div className="bio">
                        <h3 className="text-secondary">JASPER VAN DER VOO</h3>
                        <p>
                            Hey. I'm a Front End Developer. I enjoy making vivid, seamless interfaces. I've been working
                            for a year now since I completed my BSC majoring in Computer Science in 2017. I've worked a
                            lot with WordPress since then, making many fully responsive web sites.
                        </p>
                        <p>
                            In my spare time I like to drink too much coffee, eat really spicy food and work out. I also
                            go to weekly coding tutorials in order to expand my programming knowledge. On the off chance
                            that you ride a unicycle, or have had scoliosis surgery, please do let me know, I'd love to
                            chat about it.
                        </p>
                    </div>
                    <div className="title">
                        <h2 className="mb-0">Previous Experience</h2>
                    </div>
                    <div className="job job-1">
                        <h3>
                            Hi Ho Design
                            <br />
                            Current
                        </h3>
                        <h6>Front End Developer</h6>
                        <p>
                            Responsible for creating and deploying fully responsive, cross-browser compatible websites
                            on cloud based containers running Linux. I have worked primarily with WordPress and have
                            become comfortable with using PHP to extend the functionality of WordPress and popular
                            plugins when bespoke solutions are needed.
                        </p>
                        <p>
                            In charge of SEO formulating and implementing SEO strategies with proven results that
                            increase conversions.
                        </p>
                    </div>
                    <div className="job job-2">
                        <h3>
                            NumberWorks'nWords
                            <br />
                            Jan - Apr 2018
                        </h3>
                        <h6>Junior Software Developer</h6>
                        <ul>
                            <li>Converted legacy Delphi programs to a web based format using Smart Mobile Studio</li>
                            <li>Committed to our team environment with the ability to undergo individual tasks</li>
                            <li>
                                Used core programming principles which help when writing clean, understandable,
                                maintainable code.
                            </li>
                        </ul>
                    </div>
                    <div className="job job-3">
                        <h3>
                            The University of Auckland
                            <br />
                            2014 - 2017
                        </h3>
                        <h6>Student</h6>
                        <p>
                            I mean, I didn't actually work here, but I did do a lot of coding practise. There are a few
                            things the university could improve on, such as providing more team projects and teaching
                            more about how to work on large scale projects, but one must give credit where credit is
                            due.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
