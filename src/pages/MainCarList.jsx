import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmptyDataPage from '../components/EmptyDataPage';
import LoadingPage from '../components/LoadingPage';
import SEOMetaTags from '../components/SEOMetaTags';
import { CARS_SEGMENT_CATEGORIES } from '../constant/mock';
import useGetCarList from '../hooks/useGetCarList';

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
      <MainCarListLayout>
        <CategorySection>
          {CARS_SEGMENT_CATEGORIES.map((categories, categoriesIdx) => {
            return (
              <CategoryButton
                type="button"
                key={categoriesIdx}
                onClick={() => setSegment(categories.value)}
              >
                {categories.name}
              </CategoryButton>
            );
          })}
        </CategorySection>
        {carListStates.isLoading && <LoadingPage />}
        {carListStates.noData && <EmptyDataPage />}
        {!carListStates.isLoading && !carListStates.noData && (
          <CarList>
            {carList?.map((car, idx) => (
              <Link key={car.id} to={`/cars/${car.id}`}>
                <CarCardItem>
                  <ContentBox>
                    <TitleBox>
                      <TitleH1>{car?.attribute?.brand}</TitleH1>
                      <TitleH1>{car?.attribute?.name}</TitleH1>
                    </TitleBox>
                    <DescriptionBox>
                      <Paragraph>
                        {car?.attribute?.segment} / {car?.attribute?.fuelType}
                      </Paragraph>
                      <Paragraph>월 {car?.amount}원 부터</Paragraph>
                    </DescriptionBox>
                  </ContentBox>
                  <ImageBox>
                    <img src={car?.attribute?.imageUrl} alt="thumbnail" />
                  </ImageBox>
                  {car?.isNewCar && <NewTagSpan>신규</NewTagSpan>}
                </CarCardItem>
              </Link>
            ))}
          </CarList>
        )}
      </MainCarListLayout>
    </React.Fragment>
  );
};

export default MainCarList;

const MainCarListLayout = styled.main``;

const CategorySection = styled.section``;

const CategoryButton = styled.button``;

const CarList = styled.ul``;

const CarCardItem = styled.li``;

const ContentBox = styled.div``;

const TitleBox = styled.div``;

const DescriptionBox = styled.div``;

const ImageBox = styled.div``;

const TitleH1 = styled.h1``;

const Paragraph = styled.p``;

const NewTagSpan = styled.span``;
