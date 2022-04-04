import React from 'react';
import './CustomerReview.css'

const CustomerReview = (props) => {
    const {name, img, opinion} = props.review;
    return (
        <div className="customer-review">
            <img src={img} alt="" />
            <p>{name}</p>
            <p>{opinion}</p>
        </div>
    );
};

export default CustomerReview;