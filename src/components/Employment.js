import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/Employment.css';

const jobs = [
  {
    title: "Amazon | Software Development Engineer Intern - Alexa",
    date: "June - September 2021, 2022",
    description: [
      "Identified and researched issues that could occur in Alexa due to failing dependencies",
      "Implemented a Software Circuit Breaker into various Alexa services",
      "Conducted load tests to verify Circuit Breaker’s impact while failing dependencies",
      "Created a debugging tool for Alexa developers using AWS tools",
      "Verified the success of beta stage of the tool"
    ]
  },
  {
    title: "Draftwise | Software Intern",
    date: "July 2020 - September 2020",
    description: [
      "Migrated java backend codebase from object representations to SQL queries",
      "Created and maintained unit tests due to the code changes"
    ]
  },
  {
    title: "CoderSchool | Computer Science Instructor",
    date: "October 2018 - November 2018",
    description: [
      "Taught others to work in Unity, Scratch, Java, and C#"
    ]
  },
  {
    title: "Oakhill Pools | Lifeguard",
    date: "March - September 2018, 2019",
    description: [
      "Supervised and ensured safety conditions and cleanliness of the community pool"
    ]
  }
];

const Employment = () => {
  return (
    <section id="employment">
      <h2>Employment History</h2>
      <Fade bottom cascade>
        <div>
          {jobs.map((job, index) => (
            <div className="job" key={index}>
              <div className="title">{job.title}</div>
              <div className="date">{job.date}</div>
              <div className="description">
                {job.description.map((desc, idx) => (
                  <p key={idx}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Employment;