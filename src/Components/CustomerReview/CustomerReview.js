import React from 'react';
import './CustomerReview.css'

const CustomerReview = (props) => {
    const {img, opinion} = props.review;
    return (
        <div className="customer-review">
            <img src={img} alt="" />
            <p>{opinion}</p>
        </div>
    );
};

export default CustomerReview;