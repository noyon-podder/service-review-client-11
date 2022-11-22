import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContext";
import ReviewCard from "./ReviewCard";


const ServiceDetails = () => {
  const service = useLoaderData();
  const { name, image, des, price, _id } = service;
  const {user} = useContext(AuthProvider);
  const [location, setLocation] = useState("");
  // const [review, setReview] = useState({});
  const [userReview, setUserReview] = useState([]);
  
 useEffect( () => {
  fetch(`http://localhost:5000/reviews/${_id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setUserReview(data);
  })
 },[_id])


 const reviewButton = () => {
    const textField = location;
    const email = user?.email;
    const image = user?.photoURL;
    const author = user?.displayName;
    const date = new Date();

  

    
    const reviews = {
      serviceId: _id,
      userEmail: email,
      image,
      author,
      message: textField,
      date
    }

    fetch('http://localhost:5000/reviews', {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
     if(data.acknowledged){
      setLocation('')
      toast.success("Review add successfully")
     }
    })

    // console.log(review)
 }
  return (
    <div className="max-w-6xl mx-auto">
        <h4 className="my-4 text-orange-600 text-3xl font-bold"><span className="text-black text-3xl font-bold ">Service Name: </span>{name}</h4>
      <div className="card  bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={image} alt="ServicesImage" />
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

      <div className="my-8">
        {
          userReview?.length === 0 && <h3 className="text-3xl text-indigo-600 font-semibold">No review</h3>
        }
        {userReview?.map(review => <ReviewCard
            key={review._id}
            review={review}
        />)}
      </div>
        <>
        {
            user?.uid ? 
            <div className="py-5">
            <h2 className="text-orange-500 text-2xl font-semibold">Reviews-</h2>
           <div className="mt-5">
           <textarea className="textarea border border-gray-300 w-full" value={location} placeholder="Share your experience" onChange={(e)=> setLocation(e.target.value)}></textarea>
           <button className="btn btn-warning px-10 font-bold mt-2" onClick={reviewButton} 
           disabled={location?.length === 0}
           >Send</button>
           </div>
          </div> :
          <h3 className="text-center py-3 text-2xl text-indigo-600 font-semibold">Please Login and share your experience!!!</h3>
        }
        </>
     
    </div>
  );
};

export default ServiceDetails;
