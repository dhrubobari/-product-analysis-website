import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import hotel from '../image/hotel.jpg';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {

    const [reviews, setReview] = useState([]);

    useEffect( () => {
        fetch('customer.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, []);

    return (
        <div>
        <div className='home-container'>
            <h1 className='heading-1'>WELCOME TO PARADISE</h1>
            <img src={hotel} alt="" />
            <h3 className='heading-2'>One of the Best 5 Star Hotel</h3>
            <h4 className='heading-3'>Customer Reviews</h4>
            </div>
            <div className="review-of-customers">
                {
                    reviews.map(review => <CustomerReview 
                    key={review.id}
                    review={review}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default Home;