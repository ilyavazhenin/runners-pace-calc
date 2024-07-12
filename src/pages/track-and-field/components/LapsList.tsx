import { useContext } from 'react';
import { LapsContext } from '../../../store/TrackAndFieldContext';
import {
  convertTimeToMs,
  parseTimeString,
  getTimeString,
  convertTimeToObj,
} from '../../../utils/time-converters';

const LapsList = () => {
  const { state } = useContext(LapsContext);
  const { trackDistance, lapDistance } = state;
  const lastLapDistance = trackDistance;
  let timeSumByLap = 0;

  return (
    <ul style={{ listStyleType: 'none', marginBottom: '65px' }}>
      {state?.laps?.length
        ? state.laps.map((lap, index) => {
            timeSumByLap += convertTimeToMs(parseTimeString(lap));
            const timeSumByLapString = getTimeString(
              convertTimeToObj(timeSumByLap)
            );
            const currentDistance = lapDistance + lapDistance * index;
            if (index === state.laps.length - 1)
              return (
                <li
                  key={index}
                >{`${lastLapDistance}m – ${lap} – ${timeSumByLapString}`}</li>
              );
            else
              return (
                <li
                  key={index}
                >{`${currentDistance}m – ${lap} – ${timeSumByLapString}`}</li>
              );
          })
        : null}
    </ul> // using index as key in my case is OK coz the elemnts or their order won't change
  );
};

export default LapsList;
