import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../styles/common';

const MainCarDetail = () => {
  return (
    <MainCarDetailLayout>
      <ImageBox></ImageBox>
      <CarModelSection>
        <BrandH2>brand</BrandH2>
        <NameH1>name</NameH1>
      </CarModelSection>
      <CarInfoListRow>
        <CarBlueTitleH2>차량 정보</CarBlueTitleH2>
        <CarInfoList>
          <FlexBox justifyContent="space-between" alignItems="center">
            <CarInfoH2>차종</CarInfoH2>
            <CarInfoParagraph>segment</CarInfoParagraph>
          </FlexBox>
        </CarInfoList>
      </CarInfoListRow>
    </MainCarDetailLayout>
  );
};

export default MainCarDetail;

const MainCarDetailLayout = styled.main``;

const ImageBox = styled.div`
  width: 100%;
  height: 20rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const CarModelSection = styled.section``;

const BrandH2 = styled.h2``;

const NameH1 = styled.h1``;

const CarInfoListRow = styled.section``;

const CarBlueTitleH2 = styled.h2``;

const CarInfoList = styled.ul``;

const CarInfoItem = styled.li``;

const CarInfoH2 = styled.h2``;

const CarInfoParagraph = styled.p``;
