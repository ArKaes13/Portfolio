import React from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;