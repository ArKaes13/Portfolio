import React from 'react';

function Navbar() {
    // Debouncer for limiting the amount of triggered scroll events
    function debounce(func, wait = 15, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    // Highlights navbar links based on scroll position
    function navbarHighlight() {
        const sections = document.querySelectorAll('section');
        const scrollY = window.pageYOffset;

        for (let section of sections) {
            const sectionId = section.getAttribute('id');
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 400;
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.navLink[href*=${sectionId}]`).classList.add('active');
            } else {
                document.querySelector(`.navLink[href*=${sectionId}]`).classList.remove('active');
            };
        };
    };
    
    window.addEventListener('scroll', debounce(navbarHighlight));

    return (
        <nav>
            <div>
                <button><a className='navLink' href='#home'>Home</a></button>
                <button><a className='navLink' href='#about'>About</a></button>
                <button><a className='navLink' href='#projects'>Projects</a></button>
                <button><a className='navLink' href='#contact'>Contact</a></button>
                <button><a className='navLink' href='#'>Resume</a></button>
            </div>
        </nav>
    );
};

export default Navbar;