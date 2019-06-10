import React, { Component } from "react";
import "./ProjectDetails.scss";

export class ProjectDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			project: {},
			loaded: false,
			error: null,
			id: window.location.pathname.slice(
				window.location.pathname.lastIndexOf("/") + 1,
				window.location.pathname.length
			)
		};
	}
	async componentDidMount() {
		const { id } = this.state;
		let res, projects;
		try {
			res = await fetch(`https://api.jaspervoo.com/projects/${id}`);
			projects = await res.json(); // Returns array of length 1
			this.setState({
				project: projects[0],
				loaded: true
			});
		} catch (error) {
			this.setState({
				loaded: true,
				error
			});
		}
	}
	render() {
		const { error, project, loaded } = this.state;
		const { date, title, description, git, img, link } = project;
		console.log(loaded ? project : "");
		return !loaded ? (
			<div>
				<h1 className="lg-heading">
					Details <br />
				</h1>
				<h1>Loading...</h1>
			</div>
		) : (
			<div>
				<h1 className="lg-heading">
					Details <br />
					<span className="text-secondary">{title}</span>
				</h1>
				<div className="single-project-wrapper">
					<div className="project-image">
						<img src={img} />
					</div>
					<div className="project-">
						<h1 className="title">{title}</h1>
						<h2 className="date text-secondary">{date}</h2>
						<p>{description}</p>
					</div>
					<a href={link} className="project-link">
						LINK
					</a>
				</div>
			</div>
		);
	}
}

export default ProjectDetails;
