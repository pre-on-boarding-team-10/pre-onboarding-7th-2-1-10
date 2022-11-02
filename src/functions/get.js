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
    startDate: getStartDate(list.startDate),
  }));
};
