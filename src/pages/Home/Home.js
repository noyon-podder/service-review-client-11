import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import About from './About/About';
import Hero from './Hero/Hero';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero/>
            <About></About>
            <Footer/>
        </div>
    );
};

export default Home;