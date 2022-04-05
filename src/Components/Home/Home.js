import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerReview from '../CustomerReview/CustomerReview';
import hotel from '../image/hotel.jpg';
import './Home.css'

const Home = () => {

    const [reviews, setReview] = useState([]);

    useEffect( () => {
        fetch('customer.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, []);
    const navigate = useNavigate();

    return (
        <div>
        <div className='home-container'>
            <h1 className='heading-1'>WELCOME TO PARADISE</h1>
            <img src={hotel} alt="" />
            <h3 className='heading-2'>One of the Best 5 Star Hotel</h3>
            <p>Just fresh quite and peaceful</p>
            <h4 className='heading-3'>Best Customer Reviews</h4>
            </div>
            <div className="review-of-customers">
                {
                    reviews.slice(0, 3).map(review => <CustomerReview 
                    key={review.id}
                    review={review}
                    ></CustomerReview>)
                }
            </div>
            <div>
            </div>
            <button onClick={() => navigate('/review')} className='goto-button'>See All Reviews</button>
        </div>
    );
};

export default Home;