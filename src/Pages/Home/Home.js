import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
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
            <Contact />
        </main>
    );
};

export default Home;