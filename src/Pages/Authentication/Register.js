import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password)
    }

    return (
        <div className='container mx-auto py-12'>
            <div className="flex-col">
                <div className="card mx-auto flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" name='password' className="input input-bordered" required />
                                <label className="label block mt-5">
                                    Already Registered? Please
                                    <Link to='/login' className="px-0 mx-1 link link-hover"> Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary text-white" value='Register' />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <button className="btn btn-primary text-white">Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;