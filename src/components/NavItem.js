import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.scss";

function NavItem({ route, displayName, currentRoute }) {
    var current = route === currentRoute ? "current" : "";
    return (
        <li className="nav-item">
            <div className="nav-link">
                <Link className={current} to={route}>
                    {displayName}
                </Link>
            </div>
        </li>
    );
}

export default NavItem;
