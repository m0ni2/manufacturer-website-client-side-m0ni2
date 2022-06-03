import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto py-12'>
            <h2 className='text-center text-4xl font-bold mb-8'>Blogs</h2>
            <div className="card max-w-5xl bg-base-100 shadow-xl mx-auto mb-6">
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>
                        In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.These include:
                        <span className='block ml-2'>
                            -Keeping component state local where necessary
                        </span>
                        <span className='block ml-2'>
                            -Memoizing React components to prevent unnecessary re-renders
                        </span>
                        <span className='block ml-2'>
                            -Code-splitting in React using dynamic import()
                        </span>
                        <span className='block ml-2'>
                            -Windowing or list virtualization in React
                        </span>
                        <span className='block ml-2'>
                            -Lazy loading images in React
                        </span>
                    </p>
                </div>
            </div>
            <div className="card max-w-5xl bg-base-100 shadow-xl mx-auto mb-6">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>
                        When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps:
                        <span className='block ml-2'>
                            -Local state
                        </span>
                        <span className='block ml-2'>
                            -Global state
                        </span>
                        <span className='block ml-2'>
                            -Server state
                        </span>
                        <span className='block ml-2'>
                            -URL state
                        </span>
                    </p>
                </div>
            </div>
            <div className="card max-w-5xl bg-base-100 shadow-xl mx-auto mb-6">
                <div className="card-body">
                    <h2 className="card-title">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h2>
                    <p>
                        We should never update the state directly, because:
                        <span className='block ml-2'>
                            -If we update it directly, calling the setState() afterward may just replace the update you made.
                        </span>
                        <span className='block ml-2'>
                            -When we directly update the state, it does not change this.state immediately.
                        </span>
                        <span className='block ml-2'>
                            -We will lose control of the state across all components.
                        </span>
                    </p>
                </div>
            </div>
            <div className="card max-w-5xl bg-base-100 shadow-xl mx-auto mb-6">
                <div className="card-body">
                    <h2 className="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>
                        In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.These include:
                        <span className='block'>
                            At first, we need to declare a state to store our search field value, we will use onChange method so that we can store the search value on every single letter type. After that we will run a filter function on the products array. We will have every single product in the loop. Then we will take only that product who has product.name.toLowercase().includes(search field value from the state and we will also convert the value to lower case) . We will keep those filtered products in a variable. Then we can call a map function and show the products in the UI. That's it!
                        </span>

                    </p>
                </div>
            </div>
            <div className="card max-w-5xl bg-base-100 shadow-xl mx-auto mb-6">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>
                        The main objective of unit testing is to ensure that each individual part is working well and as it is supposed to work. The entire system will only be able to work well if the individual parts are working well. Unit testing is performed by the software developers themselves. Sometimes, independent software testers also perform these tests.When we add more features to any software, we might need to make changes to the old design and code, and this can be expensive as well as risky. If we use the unit testing methodology, then this can save a lot of time and can make the whole process much faster and easier.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;