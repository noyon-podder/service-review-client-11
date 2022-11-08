import React from "react";

const ServiceWrapper = ({ service }) => {
  const { name, img, price, des } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
       <div className="flex w-full items-center justify-between">
       <h2 className="card-title text-orange-600">{name}</h2>
       <p className="text-indigo-600  font-bold font-2xl text-right">${price}</p>
       </div>
        <p className="text-gray-600 text-xl">{des.slice(0, 100)}...</p>
        <div className="card-actions mt-4">
          <button className="btn btn-warning px-4 hover:bg-orange-600 font-semibold">Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceWrapper;
