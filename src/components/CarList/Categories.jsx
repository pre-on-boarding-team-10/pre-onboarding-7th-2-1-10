import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { CARS_SEGMENT_CATEGORIES } from '../../constant/mock';
import useXDragScroll from '../../hooks/useXDragScroll';
import { FlexStyle } from '../../styles/common';

const Categories = props => {
  const { scrollRef, onDragStart, onDragMove, onDragEnd } = useXDragScroll();

  return (
    <CategorySection
      ref={scrollRef}
      alignItems="center"
      gap="1rem"
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      {CARS_SEGMENT_CATEGORIES.map((categories, categoriesIdx) => {
        return (
          <CategoryButton
            type="button"
            className={props.segment === categories.value ? 'active' : ''}
            key={categoriesIdx}
            onClick={() => props.setSegment(categories.value)}
          >
            {categories.name}
          </CategoryButton>
        );
      })}
    </CategorySection>
  );
};

export default Categories;

const CategorySection = styled.section`
  ${FlexStyle}
  position: --webkit-sticky;
  position: sticky;
  top: 6rem;
  padding: 2rem;
  z-index: 2;
  background: #161623;
  border-bottom: transparent;
  max-width: 45rem;
  overflow-x: auto;
`;

const CategoryButton = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.BLACK};
  padding: 1rem 2rem;
  background: #161623;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 40px;
  box-shadow: 7px 7px 14px #09090e, -7px -7px 14px #232338;
  white-space: nowrap;

  &.active {
    box-shadow: inset 7px 7px 14px #09090e, inset -7px -7px 14px #232338;
  }
`;
