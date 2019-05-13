import React, { Component } from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import "./ProjectList.scss";

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

        if (error) return <div>Error: {error.message}</div>;

        return !loaded ? ( <div>Loading....</div> /* Add a cool loading animation! */ ) :
        <div>
            { projects.map(project => (
                <div key={project.id} className="item">
                    <a href={`details/${project.id}`}>
                        <img src={project.img} alt="Project" />
                    </a>
                    <a href="#!" className="btn-light">
                        <FaEye className="button-icon" />
                        {`Details`}
                    </a>
                    {project.git !== "" ? (
                        <a href={project.git} className="btn-dark" rel="noopener noreferrer" target="_blank">
                            <FaGithub className="button-icon" />Github
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </div>
    }
}
