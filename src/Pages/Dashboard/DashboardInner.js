import React from 'react';
import { Link } from 'react-router-dom';

const DashboardInner = () => {
    return (
        <div className='container mx-auto py-12'>
            <div className="container mx-auto text-center">
                <p className="text-3xl">Welcom to user dashboard.</p>
                <h1 className="text-9xl my-10 md:text-[267px] font-extrabold">404</h1>
                <Link to="/" className="bg-indigo-700 hover:bg-indigo-600 text-white py-3 px-4 rounded-lg inline-block text-lg" href="/">
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="float-left mt-1 mr-2 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default DashboardInner;