import React from 'react';
import Contacts from './Component/Contacts/Contacts';
import Services from './Component/Services/Services';
import TopBanner from './Component/TopBanner';
import Treatment1 from './Component/Treatment1';

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Contacts />
      <Services />
      <Treatment1/>
    </div>
  );
};

export default Home;