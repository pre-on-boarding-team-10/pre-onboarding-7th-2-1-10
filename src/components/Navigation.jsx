import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { icon_back } from '../assets/icon';
import { FlexStyle } from '../styles/common';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const splitPaths = location.pathname.split('/');
  const isCarListPath = location.pathname === '/';
  const isCarDetailPath = splitPaths[1] === 'cars';

  return (
    <NavigationHeader justifyContent="space-between" align-items="center">
      <IconBox>
        {isCarDetailPath && (
          <img src={icon_back} alt="back" onClick={() => navigate(-1)} />
        )}
      </IconBox>
      <TitleBox>
        {isCarListPath && '전체차량'}
        {isCarDetailPath && '차량상세'}
      </TitleBox>
      <div />
    </NavigationHeader>
  );
};

export default Navigation;

const NavigationHeader = styled.header`
  ${FlexStyle}
  position: fixed;
  width: 100%;
  max-width: 45rem;
  padding: 2.1rem;
  left: 50%;
  transform: translateX(-50%);
  background: #161623;
  color: ${({ theme }) => theme.colors.WHITE};
  z-index: 2;
`;

const IconBox = styled.div`
  width: 2rem;
  height: 2rem;

  > img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const TitleBox = styled.div`
  align-self: center;
  font-size: 1.6rem;
  font-weight: 700;
`;
