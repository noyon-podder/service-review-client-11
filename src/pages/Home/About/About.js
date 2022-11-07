import React from "react";
import about from '../../../images/About/person.jpg';
import signeture from '../../../images/About/signature.png';
const About = () => {
  return (
    <div>
      <div className="hero  bg-base-200 py-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-x-10">
          <img src={about}
          alt="about img"
          className="mask mask-hexagon"
          />
          <div className="w-1/2">
            <span className="font-bold text-2xl text-black uppercase my-6">About Me</span>
            <h1 className="text-4xl font-bold mt-6"><span className="text-orange-600">– 2020 ,</span> We’re in Bangladesh!</h1>
            <p className="py-6">
            In practice, legal jurisdictions exercise their right to determine who is recognized as being a lawyer. As a result, the meaning of the term "lawyer" may vary from place to place. Some jurisdictions have two types of lawyers,
            </p>
            <div className="flex justify-between mt-5">
            <button className="btn btn-orange btn-outline px-8 text-black">Contact Us</button>
            <img src={signeture} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
