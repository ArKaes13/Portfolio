import React from 'react';
import SectionHeader from './SectionHeader';
import Project from './Project.js';
import recipeOnPhone from '../Images/recipeOnPhone.png';
import resumeImg from '../Images/resumeImg.jpg';
import adminDashboard from '../Images/adminDashboard.png';

function Projects() {
    return (
        <section id='projects'>
            <SectionHeader sectionName='Projects' />
            <Project 
                projectName='Recipe Website'
                projectDescription='First website I made with simple HTML, CSS, and Javascript.
                    My girlfriend uses it several times a week which, despite its simplicity,
                    makes me proud that it serves a purpose. Designed specifically for iPhone 8.'
                imgSrc={recipeOnPhone}
                url='https://arkaes13.github.io/heather-website/'
                repository='https://github.com/ArKaes13/heather-website'
            />
            <Project
                projectName='Resume on Cloud'
                projectDescription='This project consisted of hosting my resume on the cloud
                using Amazon Web Services. It features a semi-standard resume format and a
                visitor counter. The visitor counter uses an API, that I wrote in Python, to 
                communicate with DyanmoDB to retrieve and update page view data.'
                imgSrc={resumeImg}
                url='https://www.montgomeryresume.click/'
                repository='https://github.com/ArKaes13/awsResume'
            />
            <Project
                projectName='Admin Dashboard'
                projectDescription='A front-end exercise I did as part of the Odin Project. 
                The purpose of the exercise was to practice styling with display:grid. 
                Page is only a design and is nonfunctional.'
                imgSrc={adminDashboard}
                url='https://arkaes13.github.io/dashboard-design-exercise/'
                repository='https://github.com/ArKaes13/dashboard-design-exercise'
            />
        </section>
    );
};

export default Projects