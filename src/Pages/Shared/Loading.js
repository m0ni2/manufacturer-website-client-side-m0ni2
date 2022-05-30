import React from 'react';

const Loading = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md mt-[45vh]">
                    <progress className="progress w-56"></progress>
                </div>
            </div>
        </div>
    );
};

export default Loading;