import React from 'react';
import SectionHeader from './SectionHeader.js';

function About() {
    return (
        <section id='about'>
            <SectionHeader />
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
                        with the intent of learning MongoDB and Express in order to<br/>
                        round myself out as more of a full-stack developer.<br/>
                    </p>
                </div>
                <div className='iconContainer'>
                    <div>
                        <i className="devicon-html5-plain colored"></i>
                        <p>HTML</p>
                    </div>
                    <div>
                        <i className="devicon-css3-plain colored"></i>
                        <p>CSS</p>
                    </div>
                    <div>
                        <i className="devicon-javascript-plain colored"></i>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div>
                        <i className="devicon-python-plain colored"></i>
                        <p>PYTHON</p>
                    </div>
                    <div>
                        <i className="devicon-react-original colored"></i>
                        <p>REACT</p>
                    </div>
                    <div>
                        <i className="devicon-nodejs-plain colored"></i>
                        <p>NODE.JS</p>
                    </div>
                    <div>
                        <i className="devicon-git-plain colored"></i>
                        <p>GIT</p>
                    </div>
                    <div>
                        <i class="devicon-github-original"></i>
                        <p>GITHUB</p>
                    </div>
                    <div>
                        <i className="devicon-webpack-plain colored"></i>
                        <p>WEBPACK</p>
                    </div>
                    <div>
                        <i className="devicon-npm-original-wordmark colored"></i>
                        <p>NPM</p>
                    </div>
                    <div>
                        <i class="devicon-vscode-plain colored"></i>
                        <p>VSCODE</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;