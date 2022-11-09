import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import HomeService from './HomeService/HomeService';

const Home = () => {
    return (
        <div>
            
            <Hero/>
            <HomeService/>
            <About></About>
            <Contact/>
            
        </div>
    );
};

export default Home;