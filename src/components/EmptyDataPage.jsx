import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../styles/common';

const EmptyDataPage = () => {
  return (
    <EmptyDataPageLayout>
      <FlexBox>
        <Paragraph>차량이 없습니다</Paragraph>
      </FlexBox>
    </EmptyDataPageLayout>
  );
};

export default EmptyDataPage;

const EmptyDataPageLayout = styled.section``;

const Paragraph = styled.p``;
