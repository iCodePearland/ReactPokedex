import PokemonSpriteSmall from './PokemonSpriteSmall';

function PokemonEvolution(props) {
  const { evoSprites, evoNames } = props;

  return (
    <div className="pokemon-evolution">
      <div className="evolution-title">Evolutions</div>
      <div className="evolution-sprites">
        {evoSprites.map((sprite, index) => (
          <PokemonSpriteSmall key={index} src={sprite} name={evoNames[index]} />
        ))}
      </div>
    </div>
  );
}

export default PokemonEvolution;