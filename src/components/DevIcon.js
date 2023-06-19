import React from 'react';

function DevIcon(props) {
    return(
        <div>
            <i className={props.iconStyle}></i>
            <p>{props.iconName}</p>
        </div>
    );
};

export default DevIcon;