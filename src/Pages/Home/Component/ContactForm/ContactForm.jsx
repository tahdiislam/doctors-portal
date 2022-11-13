import React from 'react';
import bgImg from '../../../../assets/images/appointment.png';
import PrimaryBtn from '../../../../Component/PrimaryBtn';

const ContactForm = () => {
    return (
        <section className='py-16' style={{background: `url(${bgImg})`}}>
            <div className='mb-10'>
                <h3 className='text-xl text-primary font-bold text-center'>
                    Contact Us
                </h3>
                <h2 className='text-4xl text-center text-white'>
                    Stay Connected With Us
                </h2>
            </div>
            <div>
                <form action="" className='flex flex-col gap-4 max-w-xl mx-auto'>
                    <input type="email" placeholder="Email Address" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full" />
                    <textarea className="textarea textarea-primary" placeholder="Your Message"></textarea>
                    <div className='mx-auto'>
                        <PrimaryBtn>Submit</PrimaryBtn>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;