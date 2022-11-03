import React from 'react';
import styled from 'styled-components';
import CardInfoItem from './CardInfoItem';
import { FlexBox, FlexStyle } from '../../styles/common';
import { getCardInfoHeaderList } from '../../functions/get';

const CarDetailCard = props => {
  const carDetail = props.carDetail;
  const cardInfoHeaderList = getCardInfoHeaderList(carDetail) || [];

  return (
    <CarDetailCardLayout flexDirection="column" gap="2rem">
      <CardImageSection>
        <img src={carDetail?.attribute?.imageUrl} alt="car-thumbnail" />
      </CardImageSection>
      <CardNameSection flexDirection="column" gap="0.8rem">
        <FlexBox flexDirection="column" gap="0.4rem">
          <h2>{carDetail?.attribute?.brand}</h2>
          <h1>{carDetail?.attribute?.name}</h1>
        </FlexBox>
        <AmountParagraph>월 {carDetail?.amount} 원</AmountParagraph>
      </CardNameSection>
      <CardInfoListRow flexDirection="column" gap="2rem">
        {cardInfoHeaderList?.map((headerItem, headerItemIdx) => {
          const hasCarInfoList = headerItem.list?.length !== 0;
          return (
            hasCarInfoList && (
              <React.Fragment key={`${headerItem.title}${headerItemIdx}`}>
                <CardTitleH2>{headerItem.title}</CardTitleH2>
                <CardInfoItem headerItem={headerItem} />
              </React.Fragment>
            )
          );
        })}
      </CardInfoListRow>
    </CarDetailCardLayout>
  );
};

export default CarDetailCard;

const CarDetailCardLayout = styled.section`
  ${FlexStyle}
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 1.8rem 0;
  padding: 4rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const CardImageSection = styled.section`
  width: 100%;
  min-width: 32.7rem;
  height: 25rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardNameSection = styled.section`
  ${FlexStyle}
  font-size: 2.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const CardInfoListRow = styled.section`
  ${FlexStyle}
`;

const AmountParagraph = styled.p`
  align-self: flex-end;
`;

const CardTitleH2 = styled.h2`
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
