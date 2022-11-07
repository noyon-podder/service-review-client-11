import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Home;