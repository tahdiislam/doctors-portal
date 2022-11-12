import React from 'react';

const Contact = ({ contactData }) => {
    const { name, description, img, bgClass} = contactData
    return (
        <div className={`p-6 text-white card card-side shadow-xl ${bgClass}`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Contact;