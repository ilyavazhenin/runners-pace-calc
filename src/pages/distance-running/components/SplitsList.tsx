import { useContext } from 'react';
import { SplitsContext } from '../../../context/DistRunningContext';
import {
  convertTimeToMs,
  parseTimeString,
  getTimeString,
  convertTimeToObj,
} from '../../../utils/time-converters';

const SplitsList = () => {
  const { state } = useContext(SplitsContext);
  const { roadDistance } = state;

  const lastSplitDistanceDiff = roadDistance - Math.round(roadDistance);
  const lastSplitDistance =
    lastSplitDistanceDiff > 0
      ? lastSplitDistanceDiff.toFixed(1)
      : Number(roadDistance);
  
  let timeSumBySplit = 0;

  return (
    <ul style={{ listStyleType: 'none', marginBottom: '65px' }}>
      {state?.splits?.length
        ? state.splits.map((split, index) => {
            timeSumBySplit += convertTimeToMs(parseTimeString(split));
            const timeSumBySplitString = getTimeString(
              convertTimeToObj(timeSumBySplit)
            );
            const splitDistance = index + 1;
            if (splitDistance === state.splits.length)
              return (
                <li
                  key={index} // using index as key in is OK here bc the order won't change
                >{`${lastSplitDistance}k – ${split} – ${timeSumBySplitString}`}</li>
              );
            else
              return (
                <li
                  key={index}
                >{`${splitDistance}k – ${split} – ${timeSumBySplitString}`}</li>
              );
          })
        : null}
    </ul>
  );
};

export default SplitsList;
