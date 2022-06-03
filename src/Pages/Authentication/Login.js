import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    let errorMessage;

    const [
        signInWithEmailAndPassword,
        userSgInWthEmPs,
        loadingSgInWthEmPs,
        errorSgInWthEmPs,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, userGg, loadingGg, errorGg] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);

    if (error || errorSgInWthEmPs || errorGg) {
        errorMessage = errorSgInWthEmPs?.message || errorGg?.message
    }
    if (loading || loadingSgInWthEmPs || loadingGg) {
        return <Loading />
    }

    if (user || userSgInWthEmPs || userGg) {
        navigate(from, { replace: true });
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='container mx-auto py-12'>
            <div className="flex-col">
                <div className="card mx-auto flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
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
                                    Not Registered? Please
                                    <Link to='/register' className="px-0 mx-1 link link-hover"> Register</Link>
                                </label>
                            </div>
                            <p>{errorMessage}</p>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary text-white" value='Login' />
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

export default Login;