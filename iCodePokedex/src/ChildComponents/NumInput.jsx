function NumInput(props) {
  const { no, func } = props;

  return (
    <div className="num-input">
      <input type="number" value={no} onChange={(e) => func(e.target.value)} />
    </div>
  );
}

export default NumInput;