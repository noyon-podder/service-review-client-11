import React from 'react';

const ReviewCard = ({review}) => {
    const {author, image, message} = review;
    return (
        <div className="card card-side bg-base-100 shadow-xl flex justify-center items-center mb-4">
        <div className="avatar pl-5">
  <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} alt='reviewImage' className=''/>
  </div>
</div>
        <div className="card-body">
          <h2 className="card-title">{author}</h2>
          <p>{message}</p>
        </div>
      </div>
    );
};

export default ReviewCard;