import React from 'react';
import './ReviewComments.css'

const ReviewComments = (props) => {
    const {opinion, name, rating} = props.comment;
    return (
        <div className='comments'>
            <p style={{fontSize: '22px'}}>{opinion}</p>
            <h4>Review by: {name}</h4>
            <p>rating: {rating}</p>
        </div>
    );
};

export default ReviewComments;