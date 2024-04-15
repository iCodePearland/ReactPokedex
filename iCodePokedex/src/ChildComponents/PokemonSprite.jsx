function PokemonSprite(props) {
  const { src } = props;

  return (
    <div className="pokemon-sprite">
      <img src={src} alt="Pokemon" />
    </div>
  );
}

export default PokemonSprite;