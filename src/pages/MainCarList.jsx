import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CARS_SEGMENT_CATEGORIES } from '../constant/mock';
import useGetCarList from '../hooks/useGetCarList';

const MainCarList = () => {
  const { carList, getCarList } = useGetCarList();
  const [segment, setSegment] = useState('');

  useEffect(() => {
    getCarList(segment);
  }, [segment]);

  return (
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
              <ImageBox></ImageBox>
            </CarCardItem>
          </Link>
        ))}
      </CarList>
    </MainCarListLayout>
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
