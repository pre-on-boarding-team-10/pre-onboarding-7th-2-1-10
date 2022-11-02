import { useState } from 'react';
import { getCarListAPI } from '../api';
import { ACTIONS } from '../constant/action';
import {
  getAdditionalProducts,
  getAppearingCarList,
  getFuelTypeName,
  getSegmentName,
  getStartDate,
} from '../functions/get';

const useGetCarList = () => {
  const [states, setStates] = useState({
    isLoading: true,
    isError: false,
    isSuccess: false,
  });

  const [carList, setCarList] = useState([]);

  const dispatch = (action = '') => {
    switch (action.type) {
      case ACTIONS.GET_CAR_LIST_LOADING:
        return setStates({
          isLoading: true,
          isError: false,
          isSuccess: false,
        });
      case ACTIONS.GET_CAR_LIST_SUCCESS:
        return setStates({
          isLoading: false,
          isError: false,
          isSuccess: true,
        });
      case ACTIONS.GET_CAR_LIST_ERROR:
        return setStates({
          isLoading: false,
          isError: true,
          isSuccess: false,
        });
      default:
        throw new Error(`Unhandeled Action Type: ${action.type}`);
    }
  };

  const getCarList = async (segment = '') => {
    try {
      dispatch({ type: ACTIONS.GET_CAR_LIST_LOADING });
      const response = await getCarListAPI({ segment });
      dispatch({ type: ACTIONS.GET_CAR_LIST_SUCCESS });
      setCarList(getAppearingCarList(response?.data?.payload) || []);
    } catch (err) {
      dispatch({ type: ACTIONS.GET_CAR_LIST_ERROR });
      setCarList(err?.response);
    }
  };

  return { states, carList, getCarList };
};

export default useGetCarList;
