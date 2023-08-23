import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <h3>Programming Languages</h3>
          <p>Java, JavaScript, C, Python</p>
        </div>
        <div className="skill">
          <h3>Tools</h3>
          <p>Git, Gitlab, Github, VS Code, IntelliJ, Eclipse, Pycharm</p>
        </div>
        {/* Add more skill categories */}
      </div>
    </section>
  );
};

export default Skills;
