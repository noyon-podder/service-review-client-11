import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceWrapper = ({ service }) => {
  const { name, img, price, des, _id } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <PhotoProvider>
      <figure>
       <PhotoView src={img}>
       <img src={img} alt="Shoes" className="cursor-pointer"/>
       </PhotoView>
      </figure>
        </PhotoProvider>
      <div className="card-body">
       <div className="flex w-full items-center justify-between">
       <h2 className="card-title text-orange-600">{name}</h2>
       <p className="text-indigo-600  font-bold font-2xl text-right">${price}</p>
       </div>
        <p className="text-gray-600 text-xl">{des.slice(0, 100)}...</p>
        <div className="card-actions mt-4">
         <Link to={`/services/${_id}`}>
         <button className="btn btn-warning px-4 hover:bg-orange-600 font-semibold capitalize ">View Details <FaArrowRight className="ml-2"/></button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceWrapper;
