import React, { useEffect } from 'react';
import '../assets/style2.css'; // This import is not needed when using Tailwind CSS
import '../assets/mediaqueries.css'

const Header: React.FC = () => {

  const toggleMenu = () => {
    const menu = document.querySelector<HTMLDivElement>(".menu-links");
    const icon = document.querySelector<HTMLDivElement>(".hamburger-icon");

    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        const profileElement = document.getElementById('profile');
        if (profileElement) {
          profileElement.style.opacity = '0';
        }
      } else {
        // Scrolling up
        const profileElement = document.getElementById('profile');
        if (profileElement) {
          profileElement.style.opacity = '1';
        }
      }

      lastScrollTop = currentScroll; // Update lastScrollTop

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header>
      <nav id="desktop-nav" className="flex justify-between items-center">
        <div className="logo text-xl">Alexander Hasslund</div>
        <ul className="nav-links flex gap-4 text-lg">
          <li><a href="#about">About</a></li>
          {/* <li><a href="#experience">Experience</a></li> */}
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav id="hamburger-nav" className="flex justify-between items-center">
        <div className="logo text-xl">Alexander Hasslund</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#project" onClick={toggleMenu}>Project</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
