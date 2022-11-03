import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CarListItem from '../components/CarList/CarListItem';
import Categories from '../components/CarList/Categories';
import EmptyDataPage from '../components/EmptyDataPage';
import LoadingPage from '../components/LoadingPage';
import SEOMetaTags from '../components/SEOMetaTags';
import useGetCarList from '../hooks/useGetCarList';
import { FlexStyle } from '../styles/common';

const MainCarList = () => {
  const { carList, getCarList, states: carListStates } = useGetCarList();
  const [segment, setSegment] = useState('');

  useEffect(() => {
    getCarList(segment);
  }, [segment]);

  return (
    <React.Fragment>
      <SEOMetaTags
        title={`🚗 전체 차량`}
        keywords="차량, 목록, 리스트, cars, list"
        ogSiteName="차량 정보 Website"
        description="전체 차량 목록입니다."
        image={carList?.[0]?.attribute?.imageUrl}
      />
      <MainCarListSection>
        {carListStates.isLoading && <LoadingPage />}
        {carListStates.noData && <EmptyDataPage />}

        <Categories segment={segment} setSegment={setSegment} />
        {!carListStates.isLoading && !carListStates.noData && (
          <CarList flexDirection="column" gap="1rem">
            {carList?.map(carItem => (
              <CarListItem key={carItem.id} carItem={carItem} />
            ))}
          </CarList>
        )}
      </MainCarListSection>
    </React.Fragment>
  );
};

export default MainCarList;

const MainCarListSection = styled.section``;

const CarList = styled.ul`
  ${FlexStyle}
  margin: 1.6rem;
`;
