function Type(props) {
  const { type } = props;

  if (!type) {
    return null; // Return null if type is undefined
  }

  return <div className={`type ${type.toLowerCase()}`}>{type}</div>;
}

export default Type;
