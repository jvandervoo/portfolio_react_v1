import React, { Component } from "react";
import Job from "./Job";

export class Jobs extends Component {
	constructor(props) {
		super(props);

		/* Array of my past jobs
		 * Job descriptions are jsx expressions
		 */
		this.state = {
			jobs: [
				{
					company: "Hi Ho Marketing",
					period: "Apr 2018 - Apr 2019",
					jobRole: "Front End Developer",
					description: (
						<>
							<p>
								Responsible for creating and deploying fully responsive, cross-browser compatible
								websites on cloud based containers running Linux. I have worked primarily with WordPress
								and have become comfortable with using PHP to extend the functionality of WordPress and
								popular plugins when bespoke solutions are needed.
							</p>
							<p>
								In charge of SEO formulating and implementing SEO strategies with proven results that
								increase conversions.
							</p>
						</>
					)
				},
				{
					company: "NumberWorks'nWords",
					period: "Jan - Apr 2018",
					jobRole: "Junior Software Developer",
					description: (
						<>
							<p>Converted legacy Delphi programs to a web based format using Smart Mobile Studio</p>
						</>
					)
				},
				{
					company: "The University of Auckland",
					period: "2014 - 2017",
					jobRole: "Student",
					description: (
						<>
							<p>
								This is where I learned a lot about Computer Science history and many basic coding
								principles.
							</p>
						</>
					)
				}
			]
		};
	}
	render() {
		return this.state.jobs.map((job, index) => (
			<Job
				key={index}
				id={index}
				company={job.company}
				period={job.period}
				jobRole={job.jobRole}
				description={job.description}
			/>
		));
	}
}

export default Jobs;
