import React from 'react';
import PokemonName from '../ChildComponents/PokemonName';
import PokemonSprite from '../ChildComponents/PokemonSprite';
import PokemonDescription from '../ChildComponents/PokemonDescription';
import '../App.css';

function LeftPanel(props) {
  const { pData, sData, no, description } = props;

  if (typeof pData === "object" && Object.keys(pData).length !== 0) {
    return (
      <div className="left-panel">
        <PokemonName name={pData.name} no={no} />
        <PokemonSprite src={pData.sprites} />
        <PokemonDescription description={description} no={no} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default LeftPanel;