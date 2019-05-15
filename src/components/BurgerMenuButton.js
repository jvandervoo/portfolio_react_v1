import React from "react";
import "./BurgerMenuButton.scss";

function BurgerMenuButton({ toggleMenu }) {
	return (
		<div className="menu-btn" onClick={toggleMenu}>
			<div className="btn-line" />
			<div className="btn-line" />
			<div className="btn-line" />
		</div>
	);
}

export default BurgerMenuButton;
