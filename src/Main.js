import React, { Component } from "react";
import "./Main.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { About, Home, Projects, BurgerMenu, BurgerMenuButton, NotFound } from "./components";
import BackgroundImage from "./assets/imgs/planes-3.jpg";
import Contact from "./components/Contact";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            showBackground: this.props.location.pathname === "/" ? true : false,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.toggleMenu();
            this.setState({ showBackground: this.props.location.pathname === "/" ? true : false });
        }
    }

    toggleMenu = () => this.setState({ showMenu: !this.state.showMenu });

    render() {
        const backgroundStyle = {
            backgroundImage: this.state.showBackground ? `url(${BackgroundImage})` : "",
        };
        const showMenu = this.state.showMenu ? <BurgerMenu currentRoute={this.props.location.pathname} /> : "";
        return (
            <div>
                <BurgerMenuButton showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
                {showMenu}
                <div className={`site-wrapper`} style={backgroundStyle}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about/" component={About} />
                        <Route path="/projects/" component={Projects} />
                        <Route path="/contact/" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);
