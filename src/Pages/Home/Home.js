import React from 'react';
import Banner from './Banner';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <main>
            <Banner />
            <Tools />
            <Summary />
            <Reviews />
        </main>
    );
};

export default Home;