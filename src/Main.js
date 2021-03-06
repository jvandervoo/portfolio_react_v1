import React, { Component } from "react";
import "./Main.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { About, Home, Projects, BurgerMenu, BurgerMenuButton, ProjectDetails, NotFound } from "./components";
import BackgroundImage from "./assets/imgs/planes-3.jpg";
import Contact from "./components/Contact";
import { TransitionGroup } from "react-transition-group"; // ES6

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			showBackground: this.props.location.pathname === "/" ? true : false
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			if (this.state.showMenu) this.toggleMenu();
			this.setState({
				showBackground: this.props.location.pathname === "/" ? true : false
			});
		}
	}

	toggleMenu = () => this.setState({ showMenu: !this.state.showMenu });

	render() {
		const { showMenu, showBackground } = this.state;
		const backgroundStyle = {
			backgroundImage: showBackground ? `url(${BackgroundImage})` : ""
		};

		return (
			<div>
				<BurgerMenuButton active={showMenu} toggleMenu={this.toggleMenu} />
				<TransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{showMenu && (
						<BurgerMenu toggleMenu={this.toggleMenu} currentRoute={this.props.location.pathname} />
					)}
				</TransitionGroup>

				<div className={`site-wrapper`} style={backgroundStyle}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about/" component={About} />
						<Route path="/projects/" exact component={Projects} />
						<Route path="/contact/" component={Contact} />
						<Route path="/projects/details/" component={ProjectDetails} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default withRouter(Main);
