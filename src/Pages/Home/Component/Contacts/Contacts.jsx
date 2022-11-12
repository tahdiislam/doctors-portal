import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';
import Contact from './Contact';

const contactsData = [
    {
        _id: 1,
        name: "Opening Hours",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, corrupti.',
        img: clock,
        bgClass: "bg-gradient-to-r from-primary to-secondary"
    },
    {
        _id: 2,
        name: "Visit our location",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, corrupti.',
        img: marker,
        bgClass: "bg-accent"
    },
    {
        _id: 3,
        name: "Contact us now",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, corrupti.',
        img: phone,
        bgClass: "bg-gradient-to-r from-primary to-secondary"
    },
]

const Contacts = () => {
    return (
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                contactsData.map(contactData => <Contact key={contactData._id} contactData={contactData}/>)
            }
        </div>
    );
};

export default Contacts;