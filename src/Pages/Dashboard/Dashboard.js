import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="sidenav-button" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>

                <div className="drawer-side">
                    <label htmlFor="sidenav-button" className="drawer-overlay"></label>

                    <ul className="menu mt-5 p-4 overflow-y-auto w-48 bg-base-100 shadow-2xl text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/add-review'>Add a Review</Link></li>
                        <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                        <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;