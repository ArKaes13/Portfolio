import React from 'react';

function Navbar() {
    return (
        <nav>
            <div>
                <button><a href='#home'>Home</a></button>
                <button><a href='#about'>About</a></button>
                <button><a href='#projects'>Projects</a></button>
                <button><a href='#contact'>Contact</a></button>
                <button><a href='#'>Resume</a></button>
            </div>
        </nav>
    );
};

export default Navbar;