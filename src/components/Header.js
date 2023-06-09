import React from 'react';

function Header() {
    return (
        <header>
            <div id='home'>
                <p className='name'>Hi I'm <span>Tyler</span>.</p>
                <p className='introStatement'>A front-end web developer.</p>
                <button><a href='#about'>Learn more<i className="fa-solid fa-arrow-down"></i></a></button>
            </div>
        </header>
    )
}

export default Header;