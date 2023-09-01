import { useReducer } from 'react';
import { SplitsContext, reducer, initialState } from '../../Contexts';
import DistanceSelect from './components/DistanceSelect';
import FinishTimeSelectGroup from './components/FinishTimeSelect';
import SplitsList from './components/SplitsList';

const DistanceRunningPage = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, 'STATE AFTER USE REDUCER');

  return (
    <>
      <SplitsContext.Provider value={{ state, dispatch }}>
        <DistanceSelect />
        <FinishTimeSelectGroup />
        <SplitsList />
      </SplitsContext.Provider>
    </>
  );
};

export default DistanceRunningPage;
