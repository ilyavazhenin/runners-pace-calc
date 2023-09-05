import { useContext } from "react";
import { SplitsContext } from "../../../Contexts";

const SplitsList = () => {
  const { state } = useContext(SplitsContext);

  return (
    <ul>
      {state?.splits?.length ? state.splits.map((split, index) => <li key={index}>{`${split}`}</li>) : null}
    </ul> // using index as key in my case is OK coz the elemnts ot their order won't change
  );
};

export default SplitsList;
