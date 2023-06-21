import React from 'react';
import Navbar from './navbar.js';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <h1>Welcome to Nolan Dowdle's Portfolio</h1>
      </section>
      <section id="about">
        <h2>About Me</h2>
          <div className="educationAndJobs">
            <div id="educationColumn">
            <h3>Education</h3>
              <ul>
                <li><b>M.S. in Computer Science</b> <br/>North Carolina State University<br/>2021-2023</li>
                <li><b>B.S. in Computer Science</b> <br/>Appalachian State University<br/>2017-2021</li>
              </ul>
            </div>
            <div id="experienceColumn">
              <h3>Experience</h3>
                <ul>
                  <li><b>Software Engineer Intern</b><br/>Inmar Intelligence<br/>2021-2021</li>
                </ul>
            </div>
          </div>
        <p>Nice to meet you!<br/> I'm Nolan Dowdle, a Software Engineer who spends most of his time developing groundbreaking AI technologies and has formed a keen interest in NLP.
        <br/>I also do web development using React, Next.js, Node.js, Firebase, JavaScript, HTML, and CSS.
        <br/>Throughout my development experience I have used Java, C++, Python, C#, Haskell, and Swift.<br/>
        <br/>I invite you to take a look at my exciting projects below!</p>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <p>...</p>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <form action="mailto:njdowdle@gmail.com">
          <button id="email">Email <i class="fa fa-envelope"></i></button>
        </form>
        <form action="https://github.com/NolanDowdle">
          <button id="github">GitHub <i className="fa fa-github"></i></button>
        </form>
        <form action="https://www.linkedin.com/in/nolan-dowdle/">
          <button id="linkedin">LinkedIn <i class="fa fa-linkedin-square"></i></button>
        </form>
        </section>
    </div>
  );
};

export default App;
