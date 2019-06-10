import React, { Component } from "react";
import "./About.scss";
import Jobs from "./Jobs";
import BioImage from "./BioImage";

export class About extends Component {
	render() {
		return (
			<div className="about-wrapper">
				<h1 className="lg-heading">
					About
					<br />
					<span className="text-secondary">Myself</span>
				</h1>
				<div className="about-info">
					<BioImage />
					<div className="bio">
						<h3 className="text-secondary">JASPER VAN DER VOO</h3>
						<p>
							Heya. I'm a Front End Developer. I enjoy making vivid, seamless interfaces. I've been
							working for over a year since completing my BSC majoring in Computer Science in 2017. I've
							worked a lot with WordPress since then, making many fully responsive web sites.
						</p>
						<p>
							In my spare time I like to drink too much coffee, eat really spicy food and work out. I also
							go to weekly coding tutorials in order to expand my programming knowledge. On the off chance
							that you ride a unicycle, or have scoliosis, please do let me know, I'd love to chat about
							it.
						</p>
					</div>
					<div className="title">
						<h2 className="mb-0">Previous Experience</h2>
					</div>
					<Jobs />
				</div>
			</div>
		);
	}
}

export default About;
