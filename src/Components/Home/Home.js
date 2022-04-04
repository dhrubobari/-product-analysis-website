import React from 'react';
import hotel from '../image/hotel.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <h1>Hotel Review Website</h1>
            <img src={hotel} alt="" />
        </div>
    );
};

export default Home;