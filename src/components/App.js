import React from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;