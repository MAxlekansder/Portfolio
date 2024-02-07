import React, { useEffect } from 'react';
import '../assets/style2.css'; // This import is not needed when using Tailwind CSS

const Header: React.FC = () => {
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
