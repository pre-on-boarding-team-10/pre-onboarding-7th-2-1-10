import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexStyle } from '../../styles/common';

const CarListItem = props => {
  const carItem = props.carItem;
  const attribute = carItem?.attribute;

  return (
    <Link to={`/cars/${carItem?.id}`}>
      <CarCardItem gap="1rem">
        <ContentSection flexDirection="column" gap="1rem">
          <TitleSection flexDirection="column" gap="0.6rem">
            <TitleH1>{attribute?.brand}</TitleH1>
            <TitleH1>{attribute?.name}</TitleH1>
          </TitleSection>
          <DescriptionSection flexDirection="column" gap="0.6rem">
            <Paragraph>
              {attribute?.segment} / {attribute?.fuelType}
            </Paragraph>
            <Paragraph>월 {carItem?.amount}원 부터</Paragraph>
          </DescriptionSection>
        </ContentSection>
        <ImageSection>
          <ImageBox>
            <img src={attribute?.imageUrl} alt="thumbnail" />
          </ImageBox>
          {carItem?.isNewCar && <NewTagSpan>신규</NewTagSpan>}
        </ImageSection>
      </CarCardItem>
    </Link>
  );
};

export default CarListItem;

const CarCardItem = styled.li`
  ${FlexStyle}
  padding: 3rem 3.6rem;
  border-radius: 15px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const ContentSection = styled.section`
  ${FlexStyle}
  width: 100%;
`;

const TitleSection = styled.section`
  ${FlexStyle}
`;

const DescriptionSection = styled.section`
  ${FlexStyle}
`;

const ImageSection = styled.section`
  position: relative;
`;

const ImageBox = styled.div`
  position: relative;
  width: 15.2rem;
  height: 8rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const TitleH1 = styled.h1`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.WHITE};
`;

const NewTagSpan = styled.span`
  position: absolute;
  top: -1rem;
  right: -1rem;
  background-color: ${({ theme }) => theme.colors.SKYBLUE};
  color: white;
  font-size: 1.2rem;
  padding: 0.4rem 1rem;
  border-radius: 30px;
`;
