function PokemonName(props) {
  const { name, no } = props;

  return (
    <div className="pokedex-name">
      <div className="name">{name}</div>
      <div className="no">No. {no}</div>
    </div>
  );
}

export default PokemonName;