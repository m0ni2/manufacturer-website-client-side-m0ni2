import React from 'react';

const Loading = () => {
    return (
        <div className='container py-12'>
            <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ '--value': '70' }}>70%</div>
        </div>
    );
};

export default Loading;