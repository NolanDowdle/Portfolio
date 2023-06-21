import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#projects">Projects</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
