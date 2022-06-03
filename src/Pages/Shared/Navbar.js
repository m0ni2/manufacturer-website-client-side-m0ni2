import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import auth from '../../firebase.init';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loading />
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/my-portfolio'>My Portfolio</Link></li>
        {user ?
            <>

                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li>
                    <button onClick={() => signOut(auth)}>Logout</button>
                </li>
                <li className='justify-center items-center ml-5'>{user?.displayName}</li>
            </>
            :
            <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }

    </>
    return (
        <nav className="navbar bg-base-100 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl block h-[66px]">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="lg:navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label tabIndex="1" htmlFor="sidenav-button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </nav>
    );
};

export default Navbar;