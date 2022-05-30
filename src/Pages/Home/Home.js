import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Featured from './Featured';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';


const Home = () => {
    return (
        <main>
            <Banner />
            <Tools />
            <Featured />
            <Summary />
            <Reviews />
            <Contact />
        </main>
    );
};

export default Home;