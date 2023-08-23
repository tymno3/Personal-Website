import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/Projects.css';

const projects = [
  {
    title: "Yami - Multiplayer Shooter",
    videoUrl: "https://www.example.com/yami-video.mp4",
    description: "Created a 2D top-down multiplayer shooter in the Godot Engine. Collaborated with another engineer on Github and Discord."
  },
  {
    title: "Kritical - 2D Platforming Game",
    videoUrl: "https://www.example.com/kritical-video.mp4",
    description: "Built a 2D platforming game during a 24-hour hackathon. Later updated with another engineer. Designed levels and programmed scripts in the Godot Engine."
  },
  {
    title: "Kriticards - Dungeon Card Game",
    videoUrl: "https://www.example.com/kriticards-video.mp4",
    description: "Led a team of 7 high school developers to win a hackathon. Developed a dungeon card game using Unity."
  },
  {
    title: "Roommate Helper - Discord Bot",
    videoUrl: "https://www.example.com/roommate-helper-video.mp4",
    description: "Built a Discord bot as part of a class project. Utilized scrum techniques to assist roommates with chores and tasks."
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          {/* <div className="video-container">
            <ReactPlayer
              url={project.videoUrl}
              width="100%"
              height="auto"
              loop
              playing
            />
          </div> */}
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
