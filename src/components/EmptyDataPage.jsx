import React from 'react';
import styled from 'styled-components';
import { FlexStyle } from '../styles/common';

const EmptyDataPage = () => {
  return (
    <EmptyDataPageLayout justifyContent="center" alignItems="center">
      <Paragraph>차량이 없습니다</Paragraph>
    </EmptyDataPageLayout>
  );
};

export default EmptyDataPage;

const EmptyDataPageLayout = styled.section`
  ${FlexStyle}
  height: calc(100vh - 6.2rem - 7.4rem);
`;

const Paragraph = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.WHITE};
  z-index: 3;
`;
