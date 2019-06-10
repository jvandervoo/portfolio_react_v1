import React from "react";
import "./Contact.scss";

export default function Contact() {
	return (
		<main id="about">
			<h1 className="lg-heading">
				Contact
				<br />
				<span className="text-secondary"> Me</span>
			</h1>
			<div className="boxes">
				<a href="mailto:jasper.voo@gmail.com">
					<div>
						<span className="text-secondary">Email: </span> jasper.voo@gmail.com
					</div>
				</a>
				<a href="tel:0211883023">
					<div>
						<span className="text-secondary">Phone: </span> 021 188 3023
					</div>
				</a>
			</div>
		</main>
	);
}
