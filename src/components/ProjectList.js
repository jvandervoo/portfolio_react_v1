import React, { Component } from "react";
//import { FaGithub, FaEye } from "react-icons/fa";
import "./ProjectList.scss";
import js from "../assets/imgs/js.png";
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
		try {
			res = await fetch("https://api.jaspervoo.com/projects");
			projects = await res.json();
			this.setState({
				projects: projects,
				loaded: true
			});
		} catch (error) {
			this.setState({
				loaded: true,
				error
			});
		}

		// Test state for no API connection
		// this.setState({
		// 	loaded: true,
		// 	projects: [
		// 		{
		// 			id: "test",
		// 			img: "",
		// 			title: "Test project",
		// 			shortDescription:
		// 				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eum nemo, quasi asperiores voluptatibus inventore possimus dolores. officiis corrupti sunt debitis magni numquam.",
		// 			date: "24.06.18",
		// 			languages: ["wordpress", "css", "js"]
		// 		}
		// 	]
		// });
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
						<a href={`/projects/details/${project.id}`}>
							<div className="project-image" style={{ backgroundImage: `url(${project.img})` }}>
								<div className="project-overlay">
									<div className="project-overlay-header">
										<span class="title">{project.title}</span>
										<span class="date">{project.date}</span>
									</div>
									{/* <div className="spacer">
										<div className="dot top">•</div>
										<div className="dot mid">•</div>
										<div className="dot bot">•</div>
									</div> */}
									<div className="project-overlay-body">
										<p>{project.shortDescription}</p>
									</div>
									{/* <div className="spacer">
										<div className="dot top">•</div>
										<div className="dot mid">•</div>
										<div className="dot bot">•</div>
									</div> */}
									{/* <div className="project-overlay-languages">
										<img className="language" src={js} alt="javascript" />
									</div> */}
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
