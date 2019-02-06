import React, { Component } from "react";
import "./Main.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import { About, Home, Projects, BurgerMenu, BurgerMenuButton, NotFound } from "./components";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.toggleMenu();
        }
    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
    };
    render() {
        const showMenu = this.state.showMenu ? <BurgerMenu currentRoute={this.props.location.pathname} /> : "";

        return (
            <div>
                <BurgerMenuButton showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
                {showMenu}
                <div class="site-wrapper">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about/" component={About} />
                        <Route path="/projects/" component={Projects} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(Main);
