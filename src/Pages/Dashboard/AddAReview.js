import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    const handleAddAReview = async (event) => {
        event.preventDefault();
        const review = {
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
            description: event.target.review.value,
            rating: parseInt(event.target.rating.value),
        }
        const { data } = await axios.post('http://localhost:5000/reviews', review);
        console.log(data);
    };

    return (
        <div className='container mx-auto py-12'>
            <div className="flex-col">
                <div className="card mx-auto flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleAddAReview}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Review: </span>
                                </label>
                                <textarea type="textarea" placeholder="Review" name='review' className="input input-bordered max-h-32 min-h-16" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Rating:</span>
                                </label>
                                <input type="number" placeholder="Rating" name='rating' className="input input-bordered" required min='1' max='5' />
                            </div>

                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary text-white" value='Add Review' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddAReview;