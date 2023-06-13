import React from 'react';
import SectionHeader from './SectionHeader';
import Project from './Project.js';
import recipeOnPhone from '../Images/recipeOnPhone.png';

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
                projectName='PlaceHolder'
                projectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.'
                imgSrc={recipeOnPhone}
                url='#'
                repository='#'
            />
            <Project
                projectName='PlaceHolder'
                projectDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat.'
                imgSrc={recipeOnPhone}
                url='#'
                repository='#'
            />
        </section>
    );
};

export default Projects