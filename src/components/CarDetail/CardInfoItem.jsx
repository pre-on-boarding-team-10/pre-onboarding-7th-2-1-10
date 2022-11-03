import React from 'react';
import styled from 'styled-components';
import { FlexBox, FlexStyle } from '../../styles/common';

const CardInfoItem = props => {
  const headerItem = props?.headerItem;

  return (
    <CarsInfoList flexDirection="column" gap="0.6rem">
      {headerItem.descriptions?.map((description, descriptionIdx) => {
        return (
          <FlexBox
            key={`${description.name}${descriptionIdx}`}
            justifyContent="space-between"
            alignItems="center"
          >
            <CarInfoH2>{description.name}</CarInfoH2>
            <CarInfoParagraph>{description.data}</CarInfoParagraph>
          </FlexBox>
        );
      })}
    </CarsInfoList>
  );
};

export default CardInfoItem;

const CarsInfoList = styled.ul`
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
