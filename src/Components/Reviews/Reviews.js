import React, { useEffect, useState } from 'react';
import ReviewComments from '../ReviewComments/ReviewComments';

const Reviews = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('customer.json')
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    return (
        <div>
            <h1>Our Customer's Opinions</h1>
            {
                comments.map(comment => <ReviewComments
                key={comment.id}
                comment={comment}
                ></ReviewComments>)
            }
        </div>
    );
};

export default Reviews;