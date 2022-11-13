import React from 'react';
import Appointment from './Component/Appointment/Appointment';
import Contacts from './Component/Contacts/Contacts';
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
      <Appointment/>
      <Testimonials/>
    </div>
  );
};

export default Home;