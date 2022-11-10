import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContext";


const ServiceDetails = () => {
  const service = useLoaderData();
  const { name, img, des, price, _id } = service;
  const {user} = useContext(AuthProvider);
  const [location, setLocation] = useState("");
  

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }, [_id])


 const reviewButton = () => {
    const textField = location;
    const email = user?.email;
    const image = user?.photoURL;
    const serviceId = _id;
    const author = user?.displayName;
  

    const reviewData = {
        textField, email, image, serviceId,author
    }

     fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviewData)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.acknowledged){
           
           textField.reset();
        }
     })
 }
  return (
    <div className="max-w-6xl mx-auto">
        <h4 className="my-4 text-orange-600 text-3xl font-bold"><span className="text-black text-3xl font-bold">Service Name: </span>{name}</h4>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="ServicesImage" />
        </figure>
        <div className="card-body">

         <div className="flex justify-between items-center">
         <h2 className="card-title text-3xl">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="card-actions">
            <p className="text-secondary text-2xl font-bold my-3"><span className="mr-2">Price :</span> ${price}</p>
          </div>
         </div>
       
          <p className="mt-4 text-gray-500">{des}</p>
          
        </div>
      </div>
        <>
        {
            user?.email ? 
            <div className="py-5">
            <h2 className="text-orange-500 text-2xl font-semibold">Reviews-</h2>
           <div className="mt-5">
           <textarea className="textarea border border-gray-300 w-full" value={location} placeholder="Share your experience" onChange={(e)=> setLocation(e.target.value)}></textarea>
           <button className="btn btn-warning px-10 font-bold mt-2" onClick={reviewButton}>Send</button>
           </div>
          </div> :
          <h3 className="text-center py-3 text-2xl text-indigo-600 font-semibold">Please Login and share your experience!!!</h3>
        }
        </>
     
    </div>
  );
};

export default ServiceDetails;
