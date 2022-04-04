import React from 'react';
import image from './image/dslr.jpg';
import './Home.css';
import useReview from '../../hooks/useReview';


const Home = () => {

    return (
     <div className='container mt-5'>
            <div className=' d-flex align-items-center justify-content-between'>
            <div className="camera-text">
                <h1 className='camera-title-one'>Do Something</h1>
                <h1 className='camera-title-two'>With Your gorgeous Camera</h1>
                <p className='fs-5'>Hey! Introducing our new awesome product. Buy this and enjoy your time. This product really gives you good feelings. You can handle this very easily. Don't be late!</p>

            </div>
            <div className="camera-image">
                <img className='w-100' src={image} alt="" />
            </div>
        </div>

        <div className='mt-5 text-center'>
       
            <h1>Customer Review</h1>
       
            <button className='btn btn-primary py-1 px-5 fw-bold fs-5'> See All Reviews</button>
        </div>
     </div>
    );
};

export default Home;