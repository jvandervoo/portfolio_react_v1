import React from "react";
import "./BurgerMenuButton.scss";

function BurgerMenuButton(props) {
    return (
        <div className="menu-btn" onClick={props.handleClick}>
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
        </div>
    );
}

export default BurgerMenuButton;
