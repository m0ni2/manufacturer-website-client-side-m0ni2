import React from 'react';

const Tool = ({ product }) => {
    const { _id, name, description, price, minOrderQuantity, availableQuantity, supplierName, img } = product;
    return (

        <div class="card bg-base-100 shadow-2xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className="font-bold">Price:{price} Tk</h3>
                <p>{description}</p>
                <p>Min.Order Quantity: {minOrderQuantity}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;