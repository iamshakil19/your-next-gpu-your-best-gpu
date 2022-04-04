import React from 'react';
import AllReview from '../AllReview/AllReview';
import useReviews from '../Hooks/useReviews';
import './AllReviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <h2 className='text-center text-4xl font-semibold'>All Reviews</h2>
            <div className='all-reviews-container'>
                {
                    reviews.map(review => <AllReview
                        key={review.id}
                        review={review}
                    ></AllReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;