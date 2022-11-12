import React from 'react';
import Contacts from './Component/Contacts/Contacts';
import Services from './Component/Services/Services';
import TopBanner from './Component/TopBanner';

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Contacts />
      <Services />
    </div>
  );
};

export default Home;