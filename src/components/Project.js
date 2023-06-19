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
                <button className='projectBtn'><a href={props.url}>Live App</a></button>
                <button className='projectBtn'><a href={props.repository}>View Code</a></button>
            </div>
        </div>
    );
};

export default Project;