import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let errorMessage;

    const [
        createUserWithEmailAndPassword,
        userCrtWthEmPs,
        loadingCrtWthEmPs,
        errorCrtWthEmPs,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, errorUpdt] = useUpdateProfile(auth);
    const [signInWithGoogle, userGg, loadingGg, errorGg] = useSignInWithGoogle(auth);

    if (errorCrtWthEmPs || errorGg || errorUpdt) {
        errorMessage = errorCrtWthEmPs?.message || errorGg?.message
    }
    if (loadingCrtWthEmPs || loadingGg || updating) {
        return <Loading />
    }
    if (userCrtWthEmPs || userGg) {
        navigate(from, { replace: true });
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
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
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" required />
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
                        <button onClick={() => signInWithGoogle()} className="btn btn-primary text-white">Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;