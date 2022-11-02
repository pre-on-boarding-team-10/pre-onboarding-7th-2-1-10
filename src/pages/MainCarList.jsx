import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCarsAPI } from '../api';
import { ACTIONS } from '../constant/action';
import { CARS_FUEL_TYPE, CARS_SEGMENT_CATEGORIES } from '../constant/mock';

const MainCarList = () => {
  const [states, setStates] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
  });
  const [carsResponseData, setCarsResponseData] = useState([]);

  const [segment, setSegment] = useState('');

  const dispatch = action => {
    switch (action) {
      case ACTIONS.GET_CAR_LIST_LOADING:
        return {
          isLoading: true,
          isError: false,
          isSuccess: false,
        };
      case ACTIONS.GET_CAR_LIST_SUCCESS:
        return {
          isLoading: false,
          isError: false,
          isSuccess: true,
        };
      case ACTIONS.GET_CAR_LIST_ERROR:
        return {
          isLoading: false,
          isError: true,
          isSuccess: false,
        };
      default:
        throw new Error(`Unhandeled Action Type: ${action.type}`);
    }
  };

  const getSegmentName = segment => {
    return CARS_SEGMENT_CATEGORIES.find(category => category.value === segment)
      ?.name;
  };

  const getFuelTypeName = fuelType => {
    return CARS_FUEL_TYPE.find(type => type.value === fuelType)?.name;
  };

  const getCars = async () => {
    try {
      setStates(dispatch(ACTIONS.GET_CAR_LIST_LOADING));
      const response = await getCarsAPI({ segment });
      setStates(dispatch(ACTIONS.GET_CAR_LIST_SUCCESS));
      setCarsResponseData(
        response?.data?.payload?.map(list => ({
          ...list,
          amount: list.amount.toLocaleString(),
          attribute: {
            ...list.attribute,
            segment: getSegmentName(list.attribute.segment),
            fuelType: getFuelTypeName(list.attribute.fuelType),
          },
        })) || []
      );
    } catch (err) {
      setStates(dispatch(ACTIONS.GET_CAR_LIST_ERROR));
      setCarsResponseData(err?.response);
    }
  };

  useEffect(() => {
    getCars();
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
        {carsResponseData?.map((car, idx) => (
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
