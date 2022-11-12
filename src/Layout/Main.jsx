import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../Shared/Footers';
import Headers from '../Shared/Headers';

const Main = () => {
    return (
        <div>
          <Headers/>
          <Outlet/>
          <Footers/>  
        </div>
    );
};

export default Main;