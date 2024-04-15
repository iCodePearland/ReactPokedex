function PokemonSpriteSmall(props) {
  const { src, name } = props;

  return (
    <div className="pokemon-sprite-small">
      <img src={src} alt={name} />
      <div className="sprite-name">{name}</div>
    </div>
  );
}

export default PokemonSpriteSmall;