import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddAReview = () => {
    const [user, loading, error] = useAuthState(auth);


    const handleAddAReview = async (event) => {
        event.preventDefault();
        const review = {
            name: user?.displayName || event.target.name.value,
            email: user?.email || event.target.email.value,
            img: user?.photoURL || event.target.img.value,
            description: event.target.review.value,
            rating: parseInt(event.target.rating.value),
        }
        const { data } = await axios.post('http://localhost:5000/reviews', review);
        console.log(data);
    };

    return (
        <div className='container mx-auto py-12'>
            <h2 className='text-center text-4xl font-bold mb-8'>Add A Review</h2>
            <div className="flex-col">
                <div className="card mx-auto flex-shrink-0 w-full max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleAddAReview}>
                            {!user.displayName &&
                                <>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Name: </span>
                                        </label>
                                        <input type="text" placeholder="Name" name='name' className="input input-bordered max-h-32 min-h-16" required />
                                    </div>
                                </>
                            }
                            {!user.email &&
                                <>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Email: </span>
                                        </label>
                                        <input type="text" placeholder="Email" name='email' className="input input-bordered max-h-32 min-h-16" required />
                                    </div>
                                </>
                            }
                            {!user.photoURL &&
                                <>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Image: </span>
                                        </label>
                                        <input type="text" placeholder="Image URL" name='img' className="input input-bordered max-h-32 min-h-16" required />
                                    </div>
                                </>
                            }

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