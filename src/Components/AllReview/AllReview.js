import React from 'react';
import './AllReview.css'

const AllReview = ({review}) => {
    const {image, name, userReview, rating} = review
    return (
        <div className='all-review-container'>
            <img className='user-image mx-auto' src={image} alt="" />
            <h3 className='username font-semibold'>{name}</h3>
            <p>{userReview}</p>
            <p className='mt-5'> <strong>Rating: <span className='rating-color'>{rating}</span></strong> </p>
        </div>
    );
};

export default AllReview;