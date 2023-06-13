import React from 'react';
import SectionHeader from './SectionHeader';
import Project from './Project.js';
import img from '../Images/recipeOnPhone.png';

function Projects() {
    return (
        <section id='projects'>
            <SectionHeader sectionName='Projects' top='201.5' />
            <Project 
                projectName='Recipe Website'
                projectDescription='First website I made with simple HTML, CSS, and Javascript.
                    My girlfriend uses it several times a week which, despite its simplicity,
                    makes me proud that it serves a purpose. Designed specifically for iPhone 8.'
                imgSrc={img}
                url='https://arkaes13.github.io/heather-website/'
                repository='https://github.com/ArKaes13/heather-website'
            />
        </section>
    );
};

export default Projects