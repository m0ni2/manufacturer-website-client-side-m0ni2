import React from 'react';
import bgImg from '../../assets/images/young-woman-with-shop-bags-drill-yellow-background.png';

const Featured = () => {
    return (
        <section className="hero min-h-full  flex flex-start" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-neural-content py-12">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Cordless Drill Machine</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;