import React from 'react';

const ReviewWrapper = ({review}) => {
    console.log(review);
    const {author, textField, image} = review.body;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10 p-10">
          <div className='flex items-center gap-5'>
            <img src={image} alt="" className='rounded-full w-12 h-12'/>
            <span className='capitalize text-orange-600 font-bold'>{author}</span>
          </div>
          <p className='text-gray-400 font-semibold mt-5'>{textField}</p>
      </div>
    );
};

export default ReviewWrapper;