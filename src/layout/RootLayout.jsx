import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const RootLayout = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Outlet />
    </React.Fragment>
  );
};

export default RootLayout;
