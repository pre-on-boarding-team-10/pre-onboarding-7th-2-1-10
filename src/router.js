import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import MainCarDetail from './pages/MainCarDetail';
import MainCarList from './pages/MainCarList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<MainCarList />} />
          <Route path="/cars/:pathId" element={<MainCarDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
