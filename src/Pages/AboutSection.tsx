import React, { useState } from 'react';
import '../assets/style2.css';
import MountainPhoto from '../assets/Mountain2.jpg';
// import MountainPhoto2 from '../assets/Mountain1.jpg';
import MountainPhoto3 from '../assets/mountain3.jpg';
import MountainPhoto4 from '../assets/mountain4.jpg';

const AboutSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabName: string) => {
        setActiveTab(tabName);
    };


    const getImageForTab = () => {
        switch (activeTab) {
            case 'skills':
                return MountainPhoto;
            case 'experience':
                return MountainPhoto3;
            case 'education':
                return MountainPhoto4;
            default:
                return MountainPhoto4;
        }
    };


    const getTextForTab = () => {
        switch (activeTab) {
            case 'skills':
                return;
            case 'experience':
                return;
            case 'education':
                return;
            default:
                return "som ding wong";
        }
    };

    const skillText = () => {
        return (
            <ul>
                <div className="exp-container">
                    <div className="back-titles">
                        <h3 className="h3-titles">Backend Development</h3>
                        <li><span>Java</span></li>
                        <li><span>Spring Boot Framework</span></li>
                        <li><span>SSMS / SSRS</span></li>
                        <li><span>MongoDB Compass</span></li>
                        <li><span>Node.js</span></li>
                        <li><span>MySQL / MariaDB</span></li>
                        <li><span>Postman</span></li>
                    </div>
                    <div className="back-titles">
                        <h3 className="h3-titles">Frontend Development</h3>
                        <li><span>Typescript</span></li>
                        <li><span>Javascript</span></li>
                        <li><span>HTML / CSS</span></li>
                        <li><span>React</span></li>
                        <li><span>Next</span></li>
                    </div>
                    <div className="back-titles">
                        <h3 className="h3-titles">Management Competence</h3>
                        <li><span>Supply Chain Management</span></li>
                        <li><span>Microsoft Excel</span></li>
                        <li><span>Power BI</span></li>
                        <li><span>Data analysis</span></li>
                        <li><span>ERP development</span></li>
                        <li><span>Acceptance testing</span></li>
                    </div>
                </div>
            </ul>
        );
    }

    return (
        <div id="about">
            <div className="about-container">
                <div className="row">
                    <div className="about-col-1">
                        <img src={getImageForTab()} alt="" className="img-container " />
                    </div>
                    <div className="about-col-2">
                        <h1 className="sub-title">About Me</h1>
                        <div className="text-p">
                            As a cheerful and enthusiastic full-stack developer,
                            I'm driven by a passion for learning and a relentless pursuit of knowledge.
                            With a solid foundation in data science and experience in ERP development, particularly in
                            management-oriented roles,
                            I bring a unique blend of technical expertise and strategic thinking to the table. I thrive on challenges
                            and am dedicated to continuously expanding my skills to create innovative solutions that make a positive
                            impact.
                        </div>
                        <div className="tab-titles">
                            <p className={`tab-links ${activeTab === 'skills' && 'active-link'}`} onClick={() => opentab('skills')}>Skills</p>
                            <p className={`tab-links ${activeTab === 'experience' && 'active-link'}`} onClick={() => opentab('experience')}>Experience</p>
                            <p className={`tab-links ${activeTab === 'education' && 'active-link'}`} onClick={() => opentab('education')}>Education</p>
                        </div>
                        <div className={`tab-content ${activeTab === 'skills' && 'active-tab'}`} id="skills-content">
                            <div className="exp-container">
                                <ul>
                                    <div className="exp-container">
                                        <div className="back-titles">
                                            <h3 className="h3-titles">Backend Development</h3>
                                            <li><span>Java</span></li>
                                            <li><span>Spring Boot Framework</span></li>
                                            <li><span>SSMS / SSRS</span></li>
                                            <li><span>MongoDB Compass</span></li>
                                            <li><span>Node.js</span></li>
                                            <li><span>MySQL / MariaDB</span></li>
                                            <li><span>Postman</span></li>
                                        </div>
                                        <div className="back-titles">
                                            <h3 className="h3-titles">Frontend Development</h3>
                                            <li><span>Typescript</span></li>
                                            <li><span>Javascript</span></li>
                                            <li><span>HTML / CSS</span></li>
                                            <li><span>React</span></li>
                                            <li><span>Next</span></li>
                                        </div>
                                        <div className="back-titles">
                                            <h3 className="h3-titles">Management Competence</h3>
                                            <li><span>Supply Chain Management</span></li>
                                            <li><span>Microsoft Excel</span></li>
                                            <li><span>Power BI</span></li>
                                            <li><span>Data analysis</span></li>
                                            <li><span>ERP development</span></li>
                                            <li><span>Acceptance testing</span></li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className={`tab-content ${activeTab === 'experience' && 'active-tab'}`} id="experience-content">
                                <div className="exp-container">
                                    <div className="back-titles">
                                        test test
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-content ${activeTab === 'education' && 'active-tab'}`} id="education-content">
                                test 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
