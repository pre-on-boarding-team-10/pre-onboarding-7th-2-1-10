import { CARS_FUEL_TYPE, CARS_SEGMENT_CATEGORIES } from '../constant/mock';

export const getSegmentName = (segment = '') => {
  return CARS_SEGMENT_CATEGORIES.find(category => category.value === segment)
    ?.name;
};

export const getFuelTypeName = (fuelType = '') => {
  return CARS_FUEL_TYPE.find(type => type.value === fuelType)?.name;
};

export const getAdditionalProducts = (additionalProducts = []) => {
  return additionalProducts.map(additionalProduct => {
    return {
      ...additionalProduct,
      amount: additionalProduct.amount.toLocaleString(),
    };
  });
};

export const getStartDate = (dateArgument = '') => {
  try {
    const startDate = new Date(dateArgument);
    const month = startDate.getMonth() + 1;
    const date = startDate.getDate();

    const WEEK = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = WEEK[startDate.getDay()];

    return `${month}월 ${date}일 (${dayOfWeek})`;
  } catch (err) {
    return null;
  }
};

export const getIsNewCar = responseDate => {
  const origin = new Date(responseDate);
  const today = new Date();

  const diffTime = today.getTime() - origin.getTime();

  return Number(Math.abs(diffTime / (1000 * 60 * 60 * 24)).toFixed(0)) <= 1;
};

export const getAppearingCarList = (responseData = []) => {
  return responseData?.map(list => ({
    ...list,
    amount: list.amount.toLocaleString(),
    additionalProducts: getAdditionalProducts(list.additionalProducts),
    attribute: {
      ...list.attribute,
      segment: getSegmentName(list.attribute.segment),
      fuelType: getFuelTypeName(list.attribute.fuelType),
    },
    isNewCar: getIsNewCar(list.createdAt),
    startDate: getStartDate(list.startDate),
  }));
};

export const getCardInfoHeaderList = (carDetail = null) => {
  if (carDetail) {
    return [
      {
        title: '차량 정보',
        descriptions: [
          { name: '차종', data: carDetail?.attribute?.segment },
          { name: '연료', data: carDetail?.attribute?.fuelType },
          { name: '이용 가능일', data: carDetail?.startDate },
        ],
      },
      {
        title: '보험',
        descriptions: carDetail?.insurance?.map(insuranceItem => ({
          name: insuranceItem.name,
          data: insuranceItem.description,
        })),
      },
      {
        title: '추가상품',
        descriptions: carDetail?.additionalProducts?.map(productItem => ({
          name: productItem.name,
          data: `월 ${productItem.amount} 원`,
        })),
      },
    ];
  } else {
    return null;
  }
};
