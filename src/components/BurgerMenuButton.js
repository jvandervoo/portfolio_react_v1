import React from "react";
import "./BurgerMenuButton.scss";

function BurgerMenuButton({ toggleMenu, active }) {
	return (
		<div className={`menu-btn ${active ? "active" : ""}`} onClick={toggleMenu}>
			<div className="btn-line" />
			<div className="btn-line" />
			<div className="btn-line" />
		</div>
	);
}

export default BurgerMenuButton;
