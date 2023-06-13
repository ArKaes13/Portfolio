import React from 'react';

function SectionHeader(props) {
    return (
        <div className='sectionHeader'>
            <h1>{props.sectionName}</h1>
            <hr className='line'></hr>
        </div>
    );
};

export default SectionHeader;