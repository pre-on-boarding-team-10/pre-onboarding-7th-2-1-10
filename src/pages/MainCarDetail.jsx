import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import EmptyDataPage from '../components/EmptyDataPage';
import LoadingPage from '../components/LoadingPage';
import SEOMetaTags from '../components/SEOMetaTags';
import useGetCarDetail from '../hooks/useGetCarDetail';
import { FlexBox, FlexStyle } from '../styles/common';

const MainCarDetail = () => {
  const { pathId } = useParams();

  const {
    carDetail,
    getCarDetail,
    states: carDetailStates,
    carList,
  } = useGetCarDetail();

  useEffect(() => {
    getCarDetail(pathId);
  }, [carList]);

  return (
    <React.Fragment>
      <SEOMetaTags
        title={`[${carDetail?.attribute?.brand}] ${carDetail?.attribute?.name}`}
        keywords={`${carDetail?.attribute?.brand}, ${carDetail?.attribute?.name}`}
        ogSiteName="차량 정보 Website"
        description={`[${carDetail?.attribute?.brand}] ${carDetail?.attribute?.name} 차량 정보입니다.`}
        image={carDetail?.attribute?.imageUrl}
      />
      {carDetailStates.isLoading && <LoadingPage />}
      {!carDetailStates.isLoading && carDetailStates.noData && (
        <EmptyDataPage />
      )}
      {!carDetailStates.isLoading && !carDetailStates.noData && (
        <MainCarDetailLayout flexDirection="column" gap="2rem">
          <ImageBox>
            <img src={carDetail?.attribute?.imageUrl} alt="car-thumbnail" />
          </ImageBox>
          <CarModelSection flexDirection="column" gap="0.8rem">
            <FlexBox flexDirection="column" gap="0.4rem">
              <BrandH2>{carDetail?.attribute?.brand}</BrandH2>
              <NameH1>{carDetail?.attribute?.name}</NameH1>
            </FlexBox>
            <AmountParagraph>월 {carDetail?.amount} 원</AmountParagraph>
          </CarModelSection>
          <CarInfoListRow flexDirection="column" gap="2rem">
            <CarBlueTitleH2>차량 정보</CarBlueTitleH2>
            <CarInfoList flexDirection="column" gap="0.6rem">
              <FlexBox justifyContent="space-between" alignItems="center">
                <CarInfoH2>차종</CarInfoH2>
                <CarInfoParagraph>
                  {carDetail?.attribute?.segment}
                </CarInfoParagraph>
              </FlexBox>
              <FlexBox justifyContent="space-between" alignItems="center">
                <CarInfoH2>연료</CarInfoH2>
                <CarInfoParagraph>
                  {carDetail?.attribute?.fuelType}
                </CarInfoParagraph>
              </FlexBox>
              <FlexBox justifyContent="space-between" alignItems="center">
                <CarInfoH2>이용 가능일</CarInfoH2>
                <CarInfoParagraph>{carDetail?.startDate} 부터</CarInfoParagraph>
              </FlexBox>
            </CarInfoList>
            <CarBlueTitleH2>보험</CarBlueTitleH2>
            <CarInfoList flexDirection="column" gap="0.6rem">
              {carDetail?.insurance?.map(
                (insuranceElement, insuranceElementIdx) => {
                  return (
                    <FlexBox
                      key={`${insuranceElement.name}${insuranceElementIdx}`}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <CarInfoH2>{insuranceElement?.name}</CarInfoH2>
                      <CarInfoParagraph>
                        {insuranceElement?.description}
                      </CarInfoParagraph>
                    </FlexBox>
                  );
                }
              )}
            </CarInfoList>
            <CarBlueTitleH2>추가상품</CarBlueTitleH2>
            <CarInfoList flexDirection="column" gap="0.6rem">
              {carDetail?.additionalProducts?.map(
                (additionalProduct, additionalProductIdx) => {
                  return (
                    <FlexBox
                      key={`${additionalProduct.name}${additionalProductIdx}`}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <CarInfoH2>{additionalProduct?.name}</CarInfoH2>
                      <CarInfoParagraph>
                        월 {additionalProduct?.amount} 원
                      </CarInfoParagraph>
                    </FlexBox>
                  );
                }
              )}
            </CarInfoList>
          </CarInfoListRow>
        </MainCarDetailLayout>
      )}
    </React.Fragment>
  );
};

export default MainCarDetail;

const MainCarDetailLayout = styled.article`
  ${FlexStyle}
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-bottom: 1.8rem;
  padding: 4rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const ImageBox = styled.div`
  width: 100%;
  min-width: 32.7rem;
  height: 25rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CarModelSection = styled.section`
  ${FlexStyle}
  font-size: 2.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const BrandH2 = styled.h2``;

const NameH1 = styled.h1``;

const AmountParagraph = styled.p`
  align-self: flex-end;
`;

const CarInfoListRow = styled.section`
  ${FlexStyle}
`;

const CarBlueTitleH2 = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  background: -webkit-linear-gradient(#2196f3, #e91e63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;

  &::before {
    content: '';
    height: 1px;
    flex-grow: 1;
    margin-right: 1.6rem;
    background: linear-gradient(#2196f3, #e91e63);
  }
  &::after {
    content: '';
    height: 1px;
    flex-grow: 1;
    margin-left: 1.6rem;
    background: linear-gradient(#2196f3, #e91e63);
  }
`;

const CarInfoList = styled.ul`
  ${FlexStyle}
`;

const CarInfoH2 = styled.h2`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 600;
`;

const CarInfoParagraph = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.WHITE};
  font-weight: 600;
`;
