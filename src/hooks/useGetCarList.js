import { useCallback, useState } from 'react';
import { getCarListAPI } from '../api';
import { ACTIONS } from '../constant/action';
import { getAppearingCarList } from '../functions/get';

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
          noData: false,
        });
      case ACTIONS.GET_CAR_LIST_SUCCESS:
        return setStates({
          isLoading: false,
          isError: false,
          isSuccess: true,
          noData: !action.data.length,
        });
      case ACTIONS.GET_CAR_LIST_ERROR:
        return setStates({
          isLoading: false,
          isError: true,
          isSuccess: false,
          noData: false,
        });
      default:
        throw new Error(`Unhandeled Action Type: ${action.type}`);
    }
  };

  const getCarList = useCallback(async (segment = '') => {
    try {
      dispatch({ type: ACTIONS.GET_CAR_LIST_LOADING });
      const response = await getCarListAPI({ segment });
      dispatch({
        type: ACTIONS.GET_CAR_LIST_SUCCESS,
        data: response?.data?.payload,
      });
      setCarList(getAppearingCarList(response?.data?.payload) || []);
    } catch (err) {
      dispatch({ type: ACTIONS.GET_CAR_LIST_ERROR });
      setCarList(err?.response);
    }
  }, []);

  return { states, carList, getCarList };
};

export default useGetCarList;
