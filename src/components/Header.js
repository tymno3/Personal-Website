import React from 'react';
import '../styles/Header.css'; // Import your header styles here

const Header = () => {
  return (
    <header>
      <h1>Timothy Ding</h1>
      <nav>
        <a href="#education">Education</a>
        <a href="#employment">Employment</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        {/* ... other sections */}
      </nav>
    </header>
  );
};

export default Header;
