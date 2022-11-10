import React, { useEffect, useState } from 'react';
import useTitle from '../Hooks/useTitle';
import ReviewWrapper from '../shared/ReviewWrapper/ReviewWrapper';

const MyReview = () => {
    const [reviews, setReviews] = useState([])
    useTitle('My Review')
    useEffect(() => {
        fetch('https://justice-server.vercel.app/reviews/')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className='max-w-6xl mx-auto'>
           <h3 className='text-orange-500 font-bold text-2xl py-5'>Total Review : {reviews.length}</h3>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-16 py-15'>
            {
                reviews.map(review => <ReviewWrapper
                key={review._id}
                review={review}
                ></ReviewWrapper>)
            }
         </div>
        </div>
    );
};

export default MyReview;