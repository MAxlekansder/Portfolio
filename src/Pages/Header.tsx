import React from 'react';
import '../assets/style2.css'; // This import is not needed when using Tailwind CSS

const Header: React.FC = () => {
  return (
    <header>
      <nav id="desktop-nav" className="flex justify-between items-center">
        <div className="logo text-xl">Alexander Hasslund</div>
        <ul className="nav-links flex gap-4 text-lg">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav id="hamburger-nav" className="flex justify-between items-center">
        <div className="logo text-xl">Alexander Hasslund</div>
        <div className="hamburger-menu">
          {/* Hamburger menu content */}
        </div>
      </nav>
    </header>
  );
};

export default Header;