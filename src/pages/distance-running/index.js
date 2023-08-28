import DistanceSelect from "./components/DistanceSelect";
import FinishTimeSelectGroup from "./components/FinishTimeSelect";
import SplitsList from "./components/SplitsList";

const DistanceRunningPage = () => {
  return (
    <>
      <DistanceSelect />
      <FinishTimeSelectGroup />
      <SplitsList splits={[1, 2, 3]}/> 
    </>
  ); // TODO: put splits values from react context mb?
};

export default DistanceRunningPage;
