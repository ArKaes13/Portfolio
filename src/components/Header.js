import React from 'react';

function Header() {
    return (
        <header>
            <div id='home'>
                <p className='name'>Hi I'm <span>Tyler</span>.</p>
                <p className='introStatement'>A front-end web developer.</p>
                <button>Learn more<i class="fa-solid fa-arrow-down"></i></button>
            </div>
        </header>
    )
}

export default Header;