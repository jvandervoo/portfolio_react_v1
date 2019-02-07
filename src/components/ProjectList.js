import React, { Component } from "react";

export default class Projectlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            isLoaded: false,
            error: null,
        };
    }
    componentDidMount() {
        fetch("https://api.jaspervoo.com/projects")
            .then(res => res.json())
            .then(
                res => {
                    this.setState({
                        projects: res,
                        isLoaded: true,
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                }
            );
    }
    render() {
        const { error, projects, isLoaded } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading....</div>; //Add a cool loading animation!
        } else {
            return (
                <div>
                    {projects.map(project => (
                        <div key={project.id} className="item">
                            <a href={`details/${project.id}`}>
                                <img src={project.img} alt="Project" />
                            </a>
                            <a href="#!" className="btn-light">
                                {project.title}
                            </a>
                            <a href="#!" className="btn-dark" target="_blank">
                                <i className="fa fa-github" /> Github
                            </a>
                        </div>
                    ))}
                </div>
            );
        }
    }
}
