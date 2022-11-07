import React from "react";
import banner from '../../../images/slider-1.png';
const Hero = () => {
  return (
    <div className="bg-black">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner} alt="HeroImage"
          />
          <div>
            <h1 className="text-5xl font-bold text-warning">Our Clients</h1>
            <p className="py-6 text-6xl text-white font-bold">
           Do Great Things, We
           <br />
            Get The Assists.
            </p>
            <button className="btn btn-warning btn-outline px-8 mt-10 ease-in-out font-semibold">Free Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
