import React, { Component } from "react";
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
		console.log(loaded ? projects : "Not Loaded");
		return !loaded ? (
			<div>Loading....</div> /* Add a cool loading animation! (or some shiny placeholder stuff) */
		) : (
			<div className="projects">
				{projects.map(project => (
					<div key={project.id} className="item">
						<a href={`/projects/details/${project.id}`}>
							<div className="project-image" style={{ backgroundImage: `url(${project.img})` }} />
							<div className="project-overlay">
								<div className="project-overlay-header">
									<span className="title">{project.title}</span>
									<span className="icon-more">>></span>
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		);
	}
}
