import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainCarList = () => {
  return (
    <MainCarListLayout>
      <CategorySection>
        <CategoryButton type="button">전체</CategoryButton>
        <CategoryButton type="button">대형</CategoryButton>
        <CategoryButton type="button">중형</CategoryButton>
        <CategoryButton type="button">소형</CategoryButton>
        <CategoryButton type="button">소형</CategoryButton>
        <CategoryButton type="button">소형</CategoryButton>
        <CategoryButton type="button">소형</CategoryButton>
        <CategoryButton type="button">소형</CategoryButton>
      </CategorySection>
      <CarList>
        {Array(30)
          .fill(0)
          .map((_, idx) => (
            <Link key={idx} to={`/cars/${1}`}>
              <CarCardItem>
                <ContentBox>
                  <TitleBox>
                    <TitleH1>brand</TitleH1>
                    <TitleH1>name</TitleH1>
                  </TitleBox>
                  <DescriptionBox>
                    <Paragraph>segment / fuelType</Paragraph>
                    <Paragraph>월 amount원 부터</Paragraph>
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
