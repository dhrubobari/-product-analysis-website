import React from 'react';
import './ReviewComments.css'

const ReviewComments = (props) => {
    const {opinion, name, rating, img} = props.comment;
    return (
        <div className='comments'>
            <img src={img} alt="" />
            <p style={{fontSize: '22px'}}>{opinion}</p>
            <h4>Review by: {name}</h4>
            <p>customer rating: {rating}</p>
        </div>
    );
};

export default ReviewComments;