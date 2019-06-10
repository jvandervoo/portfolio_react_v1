import React, { Component } from "react";
import Projectlist from "./ProjectList";
import "./Projects.scss";

export class Projects extends Component {
	render() {
		return (
			<main id="work">
				<h1 className="lg-heading">
					My <br />
					<span className="text-secondary">Work</span>
				</h1>

				<Projectlist />
			</main>
		);
	}
}

export default Projects;
