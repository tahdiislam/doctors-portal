import React from 'react';

const Review = ({ review }) => {
    const {details, name, img, location, } = review;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{details}</p>
                    <div className="flex items-center pt-4">
                        <div className="avatar mr-3">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <h4>{name}</h4>
                            <h5>{location}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;