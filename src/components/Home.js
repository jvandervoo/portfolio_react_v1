import React, { Component } from "react";
import "./Home.scss";
import SocialIcons from "./SocialIcons";

export class Home extends Component {
	render() {
		return (
			<div className="test">
				<h1 className="lg-heading" style={{ marginTop: "15vh" }}>
					<span className="jasper">Jasper</span>
					<br />
					<span className="text-secondary">
						<span className="van">van</span>
						<br />
						<span className="der">der</span> <br />
						<span className="voo"> voo</span>
					</span>
				</h1>
				<h2 className="sm-heading">Front end developer</h2>
				<SocialIcons />
			</div>
		);
	}
}

export default Home;
