import React from 'react';
import useTitle from '../Hooks/useTitle';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import HomeService from './HomeService/HomeService';

const Home = () => {
    useTitle('Home');
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