import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import HomeService from './HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero/>
            <HomeService/>
            <About></About>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;