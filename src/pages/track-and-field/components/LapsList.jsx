import { useContext } from 'react';
import { LapsContext } from '../../../TrackAndFieldContext';
import {
  convertTimeToMs,
  parseTimeString,
  getTimeString,
  convertTimeToObj,
} from '../../../utils/time-converters';

const LapsList = () => {
  const { state } = useContext(LapsContext);
  const lastSplitDistanceDiff = state.distance - Math.round(state.distance);
  const lastSplitDistance = lastSplitDistanceDiff > 0 ? lastSplitDistanceDiff.toFixed(1) : parseInt(state.distance);
  let timeSumBySplit = 0;

  return (
    <ul style={{ listStyleType: 'none' }}>
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
                  key={index}
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
    </ul> // using index as key in my case is OK coz the elemnts ot their order won't change
  );
};

export default LapsList;
