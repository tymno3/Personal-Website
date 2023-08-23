import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/Education.css';

const courses = [
  { name: "Data Structs and Algs", url: "https://catalog.ucsc.edu/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-101/" },
  { name: "Comp Architect", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-120/" },
  { name: "Comp Systems & Assembly Language", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/lower-division/cse-12/" },
  { name: "Vector Calc", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/math-mathematics/lower-division/math-23a/" },
  { name: "Comp Sys and C", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/lower-division/cse-13s/" },
  { name: "Discrete Math", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/lower-division/cse-16/" },
  { name: "Math Methods", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/am-applied-mathematics/lower-division/am-20/" },
  { name: "Prog Abs Python", url: "https://catalog.ucsc.edu/en/2019-2020/General-Catalog/Courses/CSE-Computer-Science-and-Engineering/Lower-Division/CSE-30" },
  { name: "Intro Comp. Networking", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-150/" },
  { name: "Intro to Computer Graphics", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-160/" },
  { name: "Intro to Prob. Theory", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/stat-statistics/upper-division/stat-131/" },
  { name: "Applied ML", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-144/" },
  { name: "Database Systems", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-180/" },
  { name: "Software Engineering", url: "https://catalog.ucsc.edu/en/2019-2020/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-115a/" },
  { name: "Full Stack Web Dev", url: "https://ucsc.smartcatalogiq.com/en/current/general-catalog/courses/cse-computer-science-and-engineering/upper-division/cse-186/" }
];

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <Fade bottom cascade>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <a className="course" href={course.url} key={index} target="_blank" rel="noopener noreferrer">
              {course.name}
            </a>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Education;