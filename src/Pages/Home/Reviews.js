import React from 'react';

const Reviews = () => {
    return (
        <section className='container py-12 mx-auto'>
            <h2 className='text-center text-4xl font-bold mb-8'>Customer Feedback</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p>For me, a good business , especially one on how to present information efficiently, should be easy to pick up thumb through and get the important points quickly. Then, if I want to get more details I can.  </p>
                        <div className='flex justify-start items-center  mt-8'>
                            <div className="avatar mr-8">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="https://api.lorem.space/image/face?hash=3174" />
                                </div>

                            </div>
                            <div>
                                <h4 className='text-xl'>J. Reid</h4>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h6 className='fw-bold'>California</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;