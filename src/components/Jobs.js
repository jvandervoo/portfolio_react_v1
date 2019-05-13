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
                            <ul>
                                <li>
                                Responsible for creating and deploying fully responsive, cross-browser compatible
                                websites on cloud based containers running Linux. I have worked primarily with WordPress
                                and have become comfortable with using PHP to extend the functionality of WordPress and
                                popular plugins when bespoke solutions are needed.
                                </li>
                                <li>
                                In charge of SEO formulating and implementing SEO strategies with proven results that
                                increase conversions.
                                </li>
                                </ul>
                        </>
                    ),
                },
                {
                    company: "NumberWorks'nWords",
                    period: "Jan - Apr 2018",
                    jobRole: "Junior Software Developer",
                    description: (
                        <>
                            <ul>
                                <li>
                                    Converted legacy Delphi programs to a web based format using Smart Mobile Studio
                                </li>
                                <li>Committed to our team environment with the ability to undergo individual tasks</li>
                                <li>
                                    Used core programming principles which help when writing clean, understandable,
                                    maintainable code.
                                </li>
                            </ul>
                        </>
                    ),
                },
                {
                    company: "The University of Auckland",
                    period: "2014 - 2017",
                    jobRole: "Student",
                    description: (
                        <>
                            <p>
                                I mean, I didn't actually work here, but I did do a lot of coding practise. There are a
                                few things the university could improve on, such as providing more team projects and
                                teaching more about how to work on large scale projects, but one must give credit where
                                credit is due.
                            </p>
                        </>
                    ),
                },
            ],
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
