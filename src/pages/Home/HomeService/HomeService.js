import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceWrapper from "./ServiceWrapper";

const HomeService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://justice-server.vercel.app/homeService")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto py-20">
      <h3 className="uppercase text-3xl font-bold text-orange-600">Services</h3>
      <p className="text-black mt-4 font-semibold">We Provide great service and support</p>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-10">
        {services.map(service => <ServiceWrapper
         key={service._id}
         service={service}
        ></ServiceWrapper>)}
       </div>
       <div className="text-center mt-7">
        <Link to="/services"><button className="btn bg-black px-15 font-semibold">See All Services</button></Link>
        </div>
       
    </div>
  );
};

export default HomeService;
