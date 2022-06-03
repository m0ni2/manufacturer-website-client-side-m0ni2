import React from 'react';

const MyPortfolio = () => {
    const projects = [
        {
            name: 'MrTools',
            description: 'MrTools is a manufecturer app where wholesaler can purchase products and make online payment and admin can manage orders,products etc',
            img: 'https://i.ibb.co/Bsp08wp/2022-06-03-123728.jpg',
            url: 'https://mrtools.monir.blog/'
        },
        {
            name: 'Groceteria Warehouse',
            description: 'Groceteria Warehouse is a distributor web app where the distributor can login and update quantity and mark as delivered',
            img: 'https://i.ibb.co/j8VLZhh/2022-06-03-123646.jpg',
            url: 'https://groceteria-warehouse.monir.blog/'
        },
        {
            name: 'Perfect Wedding Photography',
            description: 'Perfect Wedding Photography is a web app for personal photographer bio',
            img: 'https://i.ibb.co/6strYGy/2022-06-03-123533.jpg',
            url: 'https://perfect-wedding-photography.monir.blog/'
        }



    ]
    return (

        <div className='container mx-auto py-12 max-w-7xl'>
            <h2 className='text-start text-2xl  mb-1'>Md. Monirul Islam</h2>
            <p className='text-xl'>MERN Stack Developer</p>
            <p className='text-xl mb-3'>monir.rj@gmail.coms</p>

            <h4><strong>Education:</strong> Completed Computer Science and Engineering from UITS </h4>
            <h4><strong>List of technologies I use:</strong> Tailwind CSS, Javascript, React JS, Node JS, Express JS, Firebase, Mongo DB, Postman </h4>

            <h2 className='text-start text-2xl  mb-3 mt-3'>Recent Projects:</h2>
            <div className='grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    projects.map((project, index) => <div
                        className="card bg-base-100 shadow-2xl"
                        key={index}
                        index={index}
                    >

                        <figure><img src={project.img} alt={project.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.description}</p>
                            <a href={project.url}><button className="btn btn-primary text-white">Visit Website</button></a>
                        </div>
                    </div>)
                }
            </div>
        </div >
    );
};

export default MyPortfolio;