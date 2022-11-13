import React from 'react';
import PrimaryBtn from '../../../../Component/PrimaryBtn';
import bgImg from "../../../../assets/images/appointment.png"
import doctors from "../../../../assets/images/doctor.png"

const Appointment = () => {
    return (
        <section className='mt-32' style={{background: `url(${bgImg})`}}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctors} className="-mt-32  w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-1/2 text-white'>
                        <h1 className='text-primary font-bold my-4 text-2xl'>Appointment</h1>
                        <h1 className="text-3xl font-medium">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;