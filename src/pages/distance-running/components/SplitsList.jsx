import { useContext } from 'react';
import { SplitsContext } from '../../../Contexts';

const SplitsList = () => {
  const { state } = useContext(SplitsContext);
  const lastSplitDistance = (
    state.distance - Math.round(state.distance)
  ).toFixed(1);

  return (
    <ul style={{ listStyleType: 'none' }}>
      {state?.splits?.length
        ? state.splits.map((split, index) => {
            const splitDistance = index + 1;
            if (splitDistance === state.splits.length)
              return <li key={index}>{`${lastSplitDistance}k – ${split}`}</li>;
            else return <li key={index}>{`${splitDistance}k – ${split}`}</li>;
          })
        : null}
    </ul> // using index as key in my case is OK coz the elemnts ot their order won't change
  );
};

export default SplitsList;
