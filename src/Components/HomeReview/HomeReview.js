import React from 'react';
import './HomeReview.css'

const Review = ({review}) => {
    const {image, name, userReview, rating} = review
    return (
        <div className='home-review-container'>
            <img className='user-image' src={image} alt="" />
            <h3 className='username font-semibold'>{name}</h3>
            <p>{userReview}</p>
            <p className='mt-5'> <strong>Rating: <span className='rating-color'>{rating}</span></strong> </p>
        </div>
    );
};

export default Review;