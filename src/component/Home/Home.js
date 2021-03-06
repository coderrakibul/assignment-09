import React from 'react';
import image from './image/dslr.jpg';
import './Home.css';
import useReview from '../../hooks/useReview';
import { Link } from 'react-router-dom';
import FirstThreeReview from '../FirstThreeReview/FirstThreeReview';


const Home = () => {
    const [reviews, setReviews] = useReview();
    const firstThree = reviews.slice(0, 3);
    return (
        <div className='container'>
            <div className='product-banner d-flex align-items-center justify-content-between'>
                <div className="camera-text">
                    <h1 className='camera-title-one'>Do Something</h1>
                    <h1 className='camera-title-two'>With Your Gorgeous Camera</h1>
                    <p className='fs-5'>Hey! Introducing our new awesome product. Buy this and enjoy your time. This product really gives you good feelings. You can handle this very easily. Don't be late!</p>

                </div>
                <div className="camera-image">
                    <img className='w-100' src={image} alt="" />
                </div>
            </div>

            <div className='text-center review-section'>
                <h1>Customer Reviews ({firstThree.length})</h1>
                <div className='all-user mt-4'>
                    {
                        firstThree.map(threeReview => <FirstThreeReview
                            key={threeReview.id}
                            threeReview={threeReview}

                        ></FirstThreeReview>)
                    }
                </div>
                <div className='mt-5 mb-5'>
                    <Link to="/review" className='btn btn-primary py-1 px-5 fw-bold fs-5'> See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;