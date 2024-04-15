import React, { useState, useEffect } from 'react';
import LeftPanel from './Components/LeftPanel';
import Divider from './Components/Divider';
import RightPanel from './Components/RightPanel';
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState({});
  const [speciesData, setSpeciesData] = useState({});
  const [evoSprites, setEvoSprites] = useState([]);
  const [evoNames, setEvoNames] = useState([]);
  const [pokemonIndex, setPokemonIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [description, setDescription] = useState("");

  useEffect(() => {
    changePokemon();
  }, []);

  const nextPokemon = () => {
    const next = Math.min(pokemonIndex + 1, 949);
    setPokemonIndex(next);
  };

  const previousPokemon = () => {
    const prev = Math.max(pokemonIndex - 1, 1);
    setPokemonIndex(prev);
  };

  const pickPokemon = (no) => {
    setPokemonIndex(no);
  };

  const fetchPokemonData = async (pokemonIndex) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`);
    const data = await response.json();
    return data;
  };

  const changePokemon = async () => {
    setLoading(true);
    const data = await fetchPokemonData(pokemonIndex);
    setPokemonData(data);
    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();
    setSpeciesData(speciesData);
    setDescription(
      speciesData.flavor_text_entries
        .filter((e) => e.language.name === "en")
        .map((e) => e.flavor_text)
        .sort(() => Math.random() - 0.5)[0]
    );
    const evoChainResponse = await fetch(speciesData.evolution_chain.url);
    const evoChainData = await evoChainResponse.json();
    const api = "https://pokeapi.co/api/v2/pokemon/";
    const evos = [];
    let current = evoChainData.chain;
    while (current) {
      const response = await fetch(`${api}${current.species.name}/`);
      const data = await response.json();
      evos.push(data);
      current = current.evolves_to[0];
    }
    setEvoSprites(evos.map((e) => e.sprites.front_default));
    setEvoNames(evos.map((e) => e.name));
    setLoading(false);
  };

  return (
    <div className="pokedex">
      <LeftPanel
        pData={pokemonData}
        sData={speciesData}
        no={pokemonIndex}
        description={description}
      />
      <Divider />
      <RightPanel
        pData={pokemonData}
        sData={speciesData}
        evoSprites={evoSprites}
        evoNames={evoNames}
        controls={{ next: nextPokemon, prev: previousPokemon, pick: pickPokemon }}
        no={pokemonIndex}
      />
    </div>
  );
}

export default App;
