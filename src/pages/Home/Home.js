import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero/>
            <About></About>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;