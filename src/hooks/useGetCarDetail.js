import { useEffect, useState } from 'react';
import { ACTIONS } from '../constant/action';
import useGetCarList from './useGetCarList';

const useGetCarDetail = () => {
  const { carList, getCarList, states: carListStates } = useGetCarList();
  const [carDetail, setCarDetail] = useState(null);
  const [states, setDetailStates] = useState({
    isLoading: true,
    hasData: false,
  });

  useEffect(() => {
    getCarList();
  }, []);

  const dispatch = (action = '') => {
    switch (action.type) {
      case ACTIONS.GET_CAR_DETAIL_LOADING:
        return setDetailStates({
          isLoading: true,
          noData: false,
        });
      case ACTIONS.GET_CAR_DETAIL_SUCCESS:
        return setDetailStates({
          isLoading: !!action.isCarListLoading,
          noData: !action.data,
        });
      default:
        throw new Error(`Unhandeled Action Type: ${action.type}`);
    }
  };

  const getCarDetail = pathId => {
    dispatch({ type: ACTIONS.GET_CAR_DETAIL_LOADING });
    const currentCarDetail =
      carList?.find(list => list.id === Number(pathId)) || null;
    dispatch({
      type: ACTIONS.GET_CAR_DETAIL_SUCCESS,
      isCarListLoading: carListStates.isLoading,
      data: currentCarDetail,
    });
    setCarDetail(currentCarDetail);
  };

  return { carDetail, states, carList, getCarDetail };
};

export default useGetCarDetail;
