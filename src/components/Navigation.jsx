import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { icon_back } from '../assets/icon';
import { FlexBox } from '../styles/common';

const Navigation = () => {
  const location = useLocation();

  const splitPaths = location.pathname.split('/');
  const isCarListPath = location.pathname === '/';
  const isCarDetailPath = splitPaths[1] === 'cars';

  return (
    <FlexBox justifyContent="space-between" align-items="center">
      <IconBox>{isCarDetailPath && <img src={icon_back} alt="back" />}</IconBox>
      <TitleBox>
        {isCarListPath && '전체차량'}
        {isCarDetailPath && '차량상세'}
      </TitleBox>
      <BlankBox />
    </FlexBox>
  );
};

export default Navigation;

const IconBox = styled.div``;

const TitleBox = styled.div`
  align-self: center;
`;

const BlankBox = styled.div``;
