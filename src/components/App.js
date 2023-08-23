import React from 'react';
import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Employment from './Employment';
import Projects from './Projects';
import '../styles/App.css'; 


function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Employment />
      <Projects />
      <Skills />
      {/* ... other components */}
    </div>
  );
}

export default App;
