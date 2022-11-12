import React from 'react';
import Contacts from './Component/Contacts/Contacts';
import TopBanner from './Component/TopBanner';

const Home = () => {
  return (
    <div>
      <TopBanner />
      <Contacts />
    </div>
  );
};

export default Home;