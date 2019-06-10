import React from "react";

export default function Job({ id, company, period, jobRole, description }) {
	return (
		<div className={`job job-${id + 1}`}>
			<h3>
				{company}
				<br />
				{period}
			</h3>
			<h6 className="text-secondary">{jobRole}</h6>
			{description /* No enclosing jsx to allow custom description format */}
		</div>
	);
}
