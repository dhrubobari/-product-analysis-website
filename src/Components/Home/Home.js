import React from 'react';
import hotel from '../image/hotel.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h1 className='heading-1'>WELCOME TO PARADISE</h1>
            <img src={hotel} alt="" />
            <h3 className='heading-2'>One of the Best 5 Star Hotel</h3>
            <p></p>
        </div>
    );
};

export default Home;