function PokemonDescription(props) {
  const { description, no } = props;

  return (
    <div className="pokemon-description">
      <div className="description">{description}</div>
      <div className="no">No. {no}</div>
    </div>
  );
}

export default PokemonDescription;