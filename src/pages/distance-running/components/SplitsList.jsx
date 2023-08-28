const SplitElementLi = (props) => {
  const { value } = props;
  return <li>{`${value}`}</li>;
}; //TODO: remove later, just use li inside map and that's it!

const SplitsList = (props) => {
  const { splits } = props;

  return (
    <ul>
      {splits.map((split) => (
        <SplitElementLi
          value={split}
          key={split}
        />
      ))}
    </ul>
  );
};

export default SplitsList;
