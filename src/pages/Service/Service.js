import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceWrapper from "../Home/HomeService/ServiceWrapper";

const Service = () => {
  const services = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto py-20">
      <h4 className="text-2xl font-bold text-orange-600">
        Total {services.length} service we provide ---
      </h4>

      <div className="services-container grid grid-cols-3 gap-20 mt-10">
        {services.map((service) => (
          <ServiceWrapper key={service._id} service={service}></ServiceWrapper>
        ))}
      </div>
    </div>
  );
};

export default Service;
