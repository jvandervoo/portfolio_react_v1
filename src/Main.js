import React, { Component } from "react";
import "./Main.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { About, Home, Projects, BurgerMenu, BurgerMenuButton, Details, NotFound } from "./components";
import BackgroundImage from "./assets/imgs/planes-3.jpg";
import Contact from "./components/Contact";
import { CSSTransitionGroup } from "react-transition-group"; // ES6

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
			this.toggleMenu();
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
				<CSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
					{showMenu && (
						<BurgerMenu toggleMenu={this.toggleMenu} currentRoute={this.props.location.pathname} />
					)}
				</CSSTransitionGroup>

				<div className={`site-wrapper`} style={backgroundStyle}>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about/" component={About} />
						<Route path="/projects/" exact component={Projects} />
						<Route path="/contact/" component={Contact} />
						<Route path="/projects/details/" component={Details} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default withRouter(Main);
