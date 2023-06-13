import React from 'react';

function Project(props) {
    return (
        <div className='projectContainer'>
            <div className='projectInfo'>
                <h2>{props.projectName}</h2>
                <p>{props.projectDescription}</p>
            </div>
            <div className='projectImage'>
                <img src={props.imgSrc} alt='image of a project'></img>
            </div>
            <div className='projectLinks'>
                <button className='projectBtn' href={props.url}>Live App</button>
                <button className='projectBtn' href={props.repository}>View Code</button>
            </div>
        </div>
    );
};

export default Project;