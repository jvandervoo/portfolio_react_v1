import React from "react";
import { Link, withRouter } from "react-router-dom";

function NavItem({ route, displayName, handleClick }) {
    return (
        <li className="nav-item" onClick={handleClick}>
            <div className="nav-link">
                <Link to={route}>{displayName}</Link>
            </div>
        </li>
    );
}

export default withRouter(NavItem);
