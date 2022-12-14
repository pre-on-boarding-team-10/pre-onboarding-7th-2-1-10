import React from 'react';
import styled from 'styled-components';
import { FlexStyle } from '../styles/common';

const LoadingPage = () => {
  return (
    <LoadingPageLayout justifyContent="center" alignItems="center">
      <Spinner />
    </LoadingPageLayout>
  );
};

export default LoadingPage;

const LoadingPageLayout = styled.section`
  ${FlexStyle}
  height: calc(100vh - 6.2rem - 7.4rem);
`;

const Spinner = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 2rem auto;
  border: 10px solid ${({ theme }) => theme.colors.LIGHTGRAY};
  border-top: 10px solid ${({ theme }) => theme.colors.BLACK};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
