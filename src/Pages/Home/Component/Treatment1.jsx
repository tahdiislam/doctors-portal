import React from 'react';
import PrimaryBtn from '../../../Component/PrimaryBtn';
import treatment from "../../../assets/images/treatment.png"

const Treatment1 = () => {
    return (
        <div className='mx-24'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-1/2 px-14'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment1;