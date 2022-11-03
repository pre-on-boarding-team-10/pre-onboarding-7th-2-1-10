import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarDetailCard from '../components/CarDetail/CarDetailCard';
import EmptyDataPage from '../components/EmptyDataPage';
import LoadingPage from '../components/LoadingPage';
import SEOMetaTags from '../components/SEOMetaTags';
import useGetCarDetail from '../hooks/useGetCarDetail';

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
        <CarDetailCard carDetail={carDetail} />
      )}
    </React.Fragment>
  );
};

export default MainCarDetail;
