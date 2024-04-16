function PokemonDataDisplay({ pokemonData, isLoading, isError, isOn }) {
  // If loading, display loader
  if (isLoading) {
    return <div className="loader"></div>;
  }

  // If error, display error message
  if (isError) {
    return <div className="pokedex-error">Pokemon not found!<br />Try again!</div>;
  }

  // If no data or not turned on, display nothing
  if (!pokemonData || !isOn) {
    return null;
  }

  // Extract data
  const { id, name, abilities, types } = pokemonData;
  const ability = abilities && abilities.length > 0 ? abilities[0].ability.name : ''; 
  const type = types && types.length > 0 ? types[0].type.name : ''; 

  return (
    <div className="pokedex-data is-enabled">
      <p className="pokedex-data-text">ID: {id}</p>
      <p className="pokedex-data-text">Name: {name}</p>
      <p className="pokedex-data-text">Ability: {ability}</p>
      <p className="pokedex-data-text">Type: {type}</p>
    </div>
  );
}

export default PokemonDataDisplay;
