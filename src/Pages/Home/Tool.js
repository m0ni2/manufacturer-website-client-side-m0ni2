import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ product }) => {
    const navigate = useNavigate();

    const { _id, name, description, price, minOrderQuantity, availableQuantity, supplierName, img } = product;

    return (

        <div className="card bg-base-100 shadow-2xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h3 className="font-bold">Price:{price} Tk</h3>
                <p>{description}</p>
                <p>Min.Order Quantity: {minOrderQuantity}</p>
                <p>Available Quantity: {availableQuantity}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;