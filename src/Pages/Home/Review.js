import React from 'react';

const Review = ({ review, index }) => {
    const { name, description, rating, img } = review;
    console.log(review)
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className='flex justify-start items-center  mt-8'>
                    <div className="avatar mr-8">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>

                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <div className="rating">
                            {
                                [...Array(rating).keys()].map(index => <input

                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    key={index}
                                />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;