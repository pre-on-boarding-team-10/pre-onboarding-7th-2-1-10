import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import MainCarDetail from './pages/MainCarDetail';
import MainCarList from './pages/MainCarList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Router path="/" element={<MainCarList />} />
        <Router path="/cars/:pathId" element={<MainCarDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
