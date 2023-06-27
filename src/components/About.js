import React from 'react';
import SectionHeader from './SectionHeader.js';
import DevIcon from './DevIcon.js';

function About() {
    return (
        <section id='about'>
            <SectionHeader sectionName='About' />
            <div className='aboutIconContainer'>
                <div className='aboutMe'>
                    <p>
                        My journey as a programmer began when I became interested<br/>
                        in automating some of my daily tasks and started to teach<br/>
                        myself <span>Python</span>.<br/>
                        <br/>
                        After learning the fundamentals, I transitioned into a<br/>
                        web development track and learned <span>HTML</span>, <span>CSS</span>, and <span>Javascript</span>.<br/>
                        I have added <span>React</span> and <span>Webpack</span> to my stack which I am<br/>
                        now using to build this portfolio.<br/>
                        <br/>
                        Currently, I would describe myself as a front-end developer<br/>
                        with the intent of expanding my back-end skills in order to<br/>
                        round myself out as more of a full-stack developer.<br/>
                    </p>
                </div>
                <div className='iconContainer'>
                    <DevIcon iconStyle="devicon-html5-plain colored" iconName='HTML' />
                    <DevIcon iconStyle="devicon-css3-plain colored" iconName='CSS' />
                    <DevIcon iconStyle="devicon-javascript-plain colored" iconName='JAVASCRIPT' />
                    <DevIcon iconStyle="devicon-python-plain colored" iconName='PYTHON' />
                    <DevIcon iconStyle="devicon-react-original colored" iconName='REACT' />
                    <DevIcon iconStyle="devicon-nodejs-plain colored" iconName='NODE.JS' />
                    <DevIcon iconStyle="devicon-git-plain colored" iconName='GIT' />
                    <DevIcon iconStyle="devicon-amazonwebservices-plain-wordmark colored" iconName='AWS' />
                    <DevIcon iconStyle="devicon-webpack-plain colored" iconName='WEBPACK' />
                    <DevIcon iconStyle="devicon-npm-original-wordmark colored" iconName='NPM' />
                    <DevIcon iconStyle="devicon-vscode-plain colored" iconName='VSCODE' />
                    <DevIcon iconStyle="devicon-bash-plain" iconName='BASH' />
                </div>
            </div>
        </section>
    );
};

export default About;