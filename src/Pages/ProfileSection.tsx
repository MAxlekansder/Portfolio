import React from 'react';
import Test2Image from '../assets/Test2.jpg';
import LinkedInIcon from '../assets/linkedin.png';
import GitHubIcon from '../assets/github.png';

class ProfileSection extends React.Component {
  render() {
    return (
      <section id="profile">
        <div className="section_pic-container">
          <img src={Test2Image} alt="Alexander profile picture" className="round-border" /> {/* Use curly braces to include the variable */}
          <div className="section_text"> 
            <p className="section_text_p1">hello i'm</p>
            <h1 className="title">Alexander Hasslund</h1>
            <p className="section_text_p2">Backend developer</p>
            <div className="btn-container">
              <button className="btn btn-color-2" onClick={() => window.open('../assets/resume-example.pdf')}>
                My CV
              </button>
              <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
                Contact
              </button>
            </div>
            <div id="socials-container">
              <img src={LinkedInIcon} alt="My LinkedIn profile" className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/alexander-hasslund-690567293/'} /> {/* Use curly braces to include the variable */}
              <img src={GitHubIcon} alt="My Github profile" className="icon" onClick={() => window.location.href = 'https://github.com/MAxlekansder'} /> {/* Use curly braces to include the variable */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProfileSection;