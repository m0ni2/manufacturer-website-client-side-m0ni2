import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const getReviews = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/reviews');
                setReviews(data);
            }
            catch (err) {
                getReviews();
            }
        }
        getReviews();
    }, []);

    return (
        <section className='container py-12 mx-auto'>
            <h2 className='text-center text-4xl font-bold mb-8'>Customer Feedback</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map((review, index) => <Review
                        key={review._id}
                        review={review}
                        index={index}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;