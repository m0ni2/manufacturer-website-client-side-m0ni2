import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axios.get(`https://mrtools.herokuapp.com/product/${id}`);
                setProduct(data);
            }
            catch (err) {
                getProduct();
            }
        }
        getProduct();
    }, []);

    const { name, description, price, minOrderQuantity, availableQuantity, img } = product;

    const [user, loading, error] = useAuthState(auth);

    const handlePlaceOrder = async (event) => {
        event.preventDefault();
        const order = {
            product,
            name: user.displayName,
            email: user.email,
            address: event.target.address.value,
            phone: event.target.phone.value,
            quantity: event.target.quantity.value,
        }
        const { data } = await axios.post('https://mrtools.herokuapp.com/order', order);

        toast('Order Placed');
        event.target.reset()
    };

    return (
        <div className='container mx-auto py-12'>
            <div className="flex-col">
                <div className="card mx-auto flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div>
                            <div tabIndex="0" className="collapse collapse-plus  rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                </div>
                                <div className="collapse-content">
                                    <div className="card bg-base-100 shadow-2xl">
                                        <figure><img src={img} alt={name} /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{name}</h2>
                                            <h3 className="font-bold">Price:{price} Tk</h3>
                                            <p>{description}</p>
                                            <p>Min.Order Quantity: {minOrderQuantity}</p>
                                            <p>Available Quantity: {availableQuantity}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handlePlaceOrder}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name: {user.displayName} </span>
                                </label>
                                <label className="label">
                                    <span className="label-text font-bold">Email: {user.email} </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Address: </span>
                                </label>
                                <textarea type="textarea" placeholder="Address" name='address' className="input input-bordered max-h-16 min-h-16" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Phone:</span>
                                </label>
                                <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Quantity:</span>
                                </label>
                                <input type="number" placeholder={minOrderQuantity} name='quantity' className="input input-bordered" min={minOrderQuantity} max={availableQuantity} required />
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary text-white" value='Place Order' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;