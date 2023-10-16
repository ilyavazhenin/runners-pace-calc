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
  const lastLapDistance = state.distance;
  let timeSumByLap = 0;
  console.log(state, 'state')

  return (
    <ul style={{ listStyleType: 'none' }}>
      {state?.laps?.length
        ? state.laps.map((lap, index) => {
            timeSumByLap += convertTimeToMs(parseTimeString(lap));
            const timeSumByLapString = getTimeString(
              convertTimeToObj(timeSumByLap)
            );
            const currentDistance = state.lapDistance + state.lapDistance * index;
            if (index === state.laps.length - 1)
              return (
                <li
                  key={index}
                >{`${lastLapDistance}k – ${lap} – ${timeSumByLapString}`}</li>
              );
            else
              return (
                <li
                  key={index}
                >{`${currentDistance}m – ${lap} – ${timeSumByLapString}`}</li>
              );
          })
        : null}
    </ul> // using index as key in my case is OK coz the elemnts ot their order won't change
  );
};

export default LapsList;
