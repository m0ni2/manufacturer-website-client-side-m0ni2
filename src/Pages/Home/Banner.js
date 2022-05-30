import React from 'react';
import heroImg from '../../assets/images/focused-carpenter-sawing-wood-board.jpg';

const Banner = () => {
    return (
        <section className="hero min-h-screen container mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={heroImg} className="max-w-sm rounded-lg shadow-2xl " />
                <div>
                    <h1 className="text-5xl font-bold text-left">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Banner;