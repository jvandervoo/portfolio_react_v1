import React from "react";

export default function Job({ id, company, period, jobRole, description }) {
	return (
		<div className={`job job-${id + 1}`}>
			<h3>
				{company}
				<br />
			</h3>
			<h6 className="text-secondary mb-0">{jobRole}</h6>
			<h6>{period}</h6>
			{description /* No enclosing jsx to allow custom description format */}
		</div>
	);
}
