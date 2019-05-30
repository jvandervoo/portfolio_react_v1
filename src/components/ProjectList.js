import React, { Component } from "react";
//import { FaGithub, FaEye } from "react-icons/fa";
import "./ProjectList.scss";

export default class Projectlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: [],
			loaded: false,
			error: null
		};
	}

	// Fetch the projects from database using API
	// Without the API connection, it is not possible to know the structure of projects. Need a signature / documentation.

	async componentDidMount() {
		let res, projects;
		// try {
		// 	res = await fetch("https://api.jaspervoo.com/projects");
		// 	projects = await res.json();
		// 	this.setState({
		// 		projects: projects,
		// 		loaded: true
		// 	});
		// } catch (error) {
		// 	this.setState({
		// 		loaded: true,
		// 		error
		// 	});
		// }

		// Test state for no API connection
		this.setState({
			loaded: true,
			projects: [
				{
					id: "test",
					img: "",
					title: "Test project",
					shortDescription: "This is a project I have worked on for a few hours. I love taking photos of it"
				}
			]
		});
	}

	render() {
		const { error, projects, loaded } = this.state;

		if (error) return <div>Error: {error.message}</div>;

		return !loaded ? (
			<div>Loading....</div> /* Add a cool loading animation! (or some shiny placeholder stuff) */
		) : (
			<div className="projects">
				{projects.map(project => (
					<div key={project.id} className="item">
						<a href={`details/${project.id}`}>
							<div className="project-image" style={{ backgroundImage: `url(${project.img})` }}>
								<div className="project-overlay">
									<div className="overlay-title">
										<h3>{project.title}</h3>
									</div>
									<div className="overlay-body">
										<p>{project.shortDescription}</p>
									</div>
									<div className="overlay-footer">{}</div>
								</div>
							</div>
						</a>
						{/* <a href="#!" className="btn-light">
							<FaEye className="button-icon" />
							{`Details`}
						</a> */}
						{/* {project.git !== "" && (
							<a href={project.git} className="btn-dark" rel="noopener noreferrer" target="_blank">
								<FaGithub className="button-icon" />
								Github
							</a>
						)} */}
					</div>
				))}
			</div>
		);
	}
}
