import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get(`https://mrtools.herokuapp.com/order/${user.email}`);
            setOrders(data);
        }
        getOrders();
    }, [user])

    if (loading) {
        return <Loading />
    }

    const handleCancel = async (id) => {
        const { data } = await axios.delete(`https://mrtools.herokuapp.com/order/${id}`);
    }
    const handlePayment = (id) => {

    }

    return (
        <div className='container mx-auto py-12'>
            <h2 className='text-center text-4xl font-bold mb-8'>My Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th colSpan='4'>Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={index}

                            >
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.product.img} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.product.name}</div>
                                            <div className="text-sm opacity-590">{order.product.description}</div>
                                        </div>
                                    </div>
                                </td>

                                <th>
                                    <button onClick={handlePayment} className="btn btn-ghost btn-xs">Payment</button>
                                </th>
                                <th>
                                    <button onClick={() => handleCancel(order.product._id)} className="btn btn-ghost btn-xs">Cancel</button>
                                </th>
                            </tr>)}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyOrders;