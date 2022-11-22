import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthProvider } from "../../contexts/AuthContext";
import useTitle from "../Hooks/useTitle";
import Modal from "./Modal/Modal";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  const[modalData, setModalData] = useState('');
  const { user } = useContext(AuthProvider);
  useTitle("My Review");
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);



   const handleReviewDeleteButton = review => {
    
    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        toast.success("Review Delete Success")

        const remaining = reviews.filter( usr => usr._id !== review._id)
        setReviews(remaining)
      }
    })



   }



  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-orange-500 font-bold text-2xl py-5">
        Total Review : {reviews.length}
      </h3>

      <table className="table w-full my-10">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Message</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        {reviews.map((review, i) => (
          <tbody key={review._id}>
            <tr>
              <th>{i + 1}</th>
              <td>
                <div className="avatar pl-5">
                  <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={review.image} alt="reviewImage" className="" />
                  </div>
                </div>
              </td>
              <td>{review?.author}</td>
              <td>{review?.message}</td>
              <td>
                <label
                  htmlFor="update-modal"
                  className="btn btn-xs btn-success"
                  onClick={() => setModalData(review)}
                >
                  Edit
                </label>
                
              </td>
              <td>
                <button className="btn btn-xs btn-warning"
                onClick={() => handleReviewDeleteButton(review)}
                >Delete</button>
              </td>
            </tr>
          </tbody>
           
        ))}
      </table>
     {
      modalData && 
      
      <Modal
      modalData={modalData}
      setModalData={setModalData}
      />
     }
    </div>
  );
};

export default MyReview;
