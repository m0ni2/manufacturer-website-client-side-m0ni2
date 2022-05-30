import React from 'react';

const Contact = () => {
    return (
        <section className='container py-12 mx-auto shadow-2xl '>
            <h2 className='text-center text-4xl font-bold mb-8'>Contact Us</h2>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left md:mr-12">
                    <h1 className="text-3xl font-bold">Send your valuable feedback to us!</h1>
                    <p className="mt-6 mb-3 font-bold">Contact Details:</p>
                    <p><span className='font-bold'>Showroom Address:</span> Ground Floor, RM Center, Gulshan, Dhaka</p>
                    <p><span className='font-bold'>Tel:</span> 01700000</p>
                    <p><span className='font-bold'>Showroom:</span> 018000000</p>
                    <p><span className='font-bold'>Email:</span> mrtools@gmail.com</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea type="textarea" placeholder="Your Message" className="input input-bordered h-[100px]" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;