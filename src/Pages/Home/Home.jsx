import React from 'react';
import ContactForm from './Component/ContactForm/ContactForm';
import Contacts from './Component/Contacts/Contacts';
import MakeAppointment from './Component/MakeAppointment/MakeAppointment';
import Services from './Component/Services/Services';
import Testimonials from './Component/Testimonial/Testimonials';
import TopBanner from './Component/TopBanner';
import Treatment1 from './Component/Treatment1';

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Contacts />
      <Services />
      <Treatment1/>
      <MakeAppointment/>
      <Testimonials/>
      <ContactForm/>
    </div>
  );
};

export default Home;