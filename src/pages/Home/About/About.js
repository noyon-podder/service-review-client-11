import React from "react";
import about from '../../../images/About/person.jpg';
const About = () => {
  return (
    <div>
      <div className="hero  bg-base-200 py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={about}
          alt="about img"
          className="mask mask-hexagon"
          />
          <div className="w-1/2">
            <span className="font-bold text-2xl text-black uppercase my-6">About Me</span>
            <h1 className="text-5xl font-bold mt-6"><span className="text-orange-600">– 2014 ,</span> We’re in Tokyo!</h1>
            <p className="py-6">
            In practice, legal jurisdictions exercise their right to determine who is recognized as being a lawyer. As a result, the meaning of the term "lawyer" may vary from place to place. Some jurisdictions have two types of lawyers,
            </p>
            <button className="btn btn-orange btn-outline px-8 text-black">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
