import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png';
import Service from './Service';

const servicesData = [
    {
        _id: 1,
        img: fluoride,
        name: "fluoride Treatment",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consectetur!',
    },
    {
        _id: 2,
        img: cavity,
        name: "Cavity Filling",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consectetur!',
    },
    {
        _id: 3,
        img: whitening,
        name: "Teeth Whitening",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consectetur!',
    },
]

const Services = () => {
    return (
        <section className='my-32'>
            <div>
                <h3 className='font-bold text-xl text-primary text-center'>
                    OUR SERVICES
                </h3>
                <h2 className='text-4xl text-center'>
                    Services We Provide
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service key={service._id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;