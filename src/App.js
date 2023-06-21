import React from 'react';
import Navbar from './navbar.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <h1>Welcome to My Portfolio</h1>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>...</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>...</p>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>...</p>
      </section>
    </div>
  );
};

export default App;
