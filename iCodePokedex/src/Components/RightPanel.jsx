import PokemonStats from '../ChildComponents/PokemonStats';
import PokemonType from './PokemonType';
import PokemonEvolution from '../ChildComponents/PokemonEvolution';
import MoveList from '../ChildComponents/MoveList';
import PokedexControls from './PokedexControls';
import Loading from './Loading';
import '../App.css';


function RightPanel(props) {
  const { pData, sData, evoSprites, evoNames, controls, no } = props;
  const { types, stats, moves } = pData;
  const { description } = sData;

  if (types) {
    return (
      <div className="right-panel">
        <PokemonStats stats={stats} />
        <PokemonType types={types} />
        <PokemonEvolution evoSprites={evoSprites} evoNames={evoNames} />
        <MoveList moves={moves} />
        <PokedexControls controls={controls} no={no} />
      </div>
    );
  } else {
    return <Loading />;
  }
}

export default RightPanel;