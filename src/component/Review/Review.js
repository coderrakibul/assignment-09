import React from 'react';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='container mt-5 mb-5'>
            <h2 className='text-center'>Customer Reviews ({reviews.length})</h2>
           <div className='all-user mt-4'>
           {
             reviews.map(review => <SingleReview key={review.id}
            review={review}
             ></SingleReview>
             )
            }
           </div>
        </div>
    );
};

export default Review;