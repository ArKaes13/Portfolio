import React from 'react';
import SectionHeader from './SectionHeader';
import Project from './Project.js';
import recipeOnPhone from '../Images/recipeOnPhone.png';
import resumeImg from '../Images/resumeImg.jpg';
import modernUI from '../Images/modernUI.png';
import travelWebsite from '../Images/travelWebsite.png';

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
                projectName='Modern UI/UX'
                projectDescription='A front-end project for promoting a product with a modern
                User Interface/User Experience. Using CSS media queries, the design is fully
                responsive on all devices.'
                imgSrc={modernUI}
                url='https://arkaes13.github.io/gpt4-website/'
                repository='https://github.com/ArKaes13/gpt4-website'
            />
            <Project
                projectName='Travel Website'
                projectDescription='A front-end travel and tour website. The design is fully
                responsive on all devices and uses the Aos library to make on-scroll
                animation effects.'
                imgSrc={travelWebsite}
                url='https://arkaes13.github.io/travel-website/'
                repository='https://github.com/ArKaes13/travel-website'
            />
        </section>
    );
};

export default Projects