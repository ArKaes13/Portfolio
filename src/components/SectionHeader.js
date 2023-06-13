import React from 'react';

function SectionHeader(props) {
    return (
        <div className='sectionHeader'>
            <h1>{props.sectionName}</h1>
            <div className='line' style={{ top: props.top + '%'}}></div>
        </div>
    );
};

export default SectionHeader;