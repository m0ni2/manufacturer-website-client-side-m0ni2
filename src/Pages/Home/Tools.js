import React from 'react';
import useProducts from '../../hooks/useProducts';
import Tool from './Tool';

const Tools = () => {
    const [products] = useProducts();

    return (
        <section className='container py-12 mx-auto'>
            <h2 className='text-center text-4xl font-bold mb-8'>Our Tools</h2>
            <div className='grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    products.slice(0, 6).map(product => <Tool
                        key={product._id}
                        product={product}
                    ></Tool>)
                }
            </div>
        </section>

    );
};

export default Tools;