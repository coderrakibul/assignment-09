import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './SingleReview.css'

const SingleReview = (props) => {
    const {name, image, text, ratings} = props.review;
    return (
        <div className='container single-user'>
            <img className='img-fluid' src={image} alt="" />
            <h4 className='text-center'>{name}</h4>
            <p>{text}</p>
            <h6>Ratings: {ratings} <span className='text-warning'><FontAwesomeIcon icon={faStar} /></span> </h6>
        </div>
    );
};

export default SingleReview;