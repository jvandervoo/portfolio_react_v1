import React, { Component } from "react";
import { FaGithub, FaEye } from "react-icons/fa";

export default class Projectlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            loaded: false,
            error: null,
        };
    }

    async componentDidMount() {
        let res, projects;
        try {
            res = await fetch("https://api.jaspervoo.com/projects");
            projects = await res.json();
            this.setState({
                projects: projects,
                loaded: true,
            });
        } catch (error) {
            this.setState({
                loaded: true,
                error,
            });
        }
    }

    render() {
        const { error, projects, loaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!loaded) {
            return <div>Loading....</div>; //Add a cool loading animation!
        } else {
            return (
                <div>
                    {projects.map(project => (
                        <div key={project.id} className="item">
                            <a href={`details/${project.id}`}>
                                v
                                <img src={project.img} alt="Project" />
                            </a>
                            <a href="#!" className="btn-light">
                                <FaEye className="project-icon-eye" />
                                {`Details on: ${project.title}`}
                            </a>
                            {project.git !== "" ? (
                                <a href={project.git} className="btn-dark" rel="noopener noreferrer" target="_blank">
                                    <FaGithub className="project-icon-git" /> View on Github
                                </a>
                            ) : (
                                ""
                            )}
                        </div>
                    ))}
                </div>
            );
        }
    }
}
