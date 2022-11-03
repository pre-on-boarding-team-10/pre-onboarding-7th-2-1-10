import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import styled from 'styled-components';

const RootLayout = () => {
  return (
    <RootLayoutSection>
      <Navigation />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </RootLayoutSection>
  );
};

export default RootLayout;

const RootLayoutSection = styled.section`
  height: 100vh;
  overflow-y: auto;
  background: #161623;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path: circle(30% at right 70%);
  }
`;

const MainLayout = styled.main`
  max-width: 45rem;
  margin: 0 auto;
  padding-top: 6.2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at 10% 40%);
  }
`;
