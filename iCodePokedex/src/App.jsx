import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import InputForm from './Components/InputForm';
import PokemonDataDisplay from './Components/PokemonDataDisplay';
import ErrorComponent from './Components/ErrorComponent';
import Loader from './Components/Loader';
import Buttons from './Components/Buttons';

const App = () => {
  // Initialize state
  const [pokemonData, setPokemonData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isOn, setIsOn] = useState(false);

  // Fetch data from API using Axios
  const fetchData = async (url) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await axios.get(url); 
      setPokemonData(response.data);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
  };

  // Add event listeners for random numbers
  useEffect(() => {
    const randomNumberElements = document.querySelectorAll('.randomNumber');
    randomNumberElements.forEach((element) => {
      element.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 1025) + 1;
        setInputValue(randomNumber);
      });
    });
    return () => {
      randomNumberElements.forEach((element) => {
        element.removeEventListener('click', () => {});
      });
    };
  }, [inputValue]);

  return (
    <>
      <a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/240415/f6e425fddffd7c94415939e505f1ac33.png" alt="pokemon-font" border="0" className='center'/></a>      
      <div className='Wrapper'>
        <div className='pokedex'>
        <div className={`pokedex-light ${isOn ? 'is-enabled' : ''}`}></div>
        <div className={`pokedex-screen ${isOn ? 'is-enabled' : ''}`}></div>
        <PokemonDataDisplay
            pokemonData={pokemonData}
            isLoading={isLoading}
            isError={isError}
            isOn={isOn}
          />
          {isOn && pokemonData && (
           <img className={`pokedex-img ${isOn ? 'is-enabled' : ''}`} src={pokemonData.sprites?.front_default} alt="" />
          )}

          <InputForm
            inputValue={inputValue}
            handleInputChange={handleInputChange} 
            handleSubmit={handleSubmit}
            isOn={isOn}
          />

          <ErrorComponent isError={isError} />
          <Loader isLoading={isLoading} />
          <table className={`pokedex-table ${isOn ? 'is-enabled' : ''}`}>
              <tbody>
                <tr>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">1</div>
                  </td>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">2</div>
                  </td>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">3</div>
                  </td>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">4</div>
                  </td>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">5</div>
                  </td>
                </tr>
                <tr>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">6</div>
                  </td>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">7</div>
                  </td>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">8</div>
                  </td>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">9</div>
                  </td>
                  <td className="pokedex-table-cell">
                    <div className="randomNumber">10</div>
                  </td>
                </tr>
              </tbody>
            </table>
          <Buttons isOn={isOn} setIsOn={setIsOn} />
          <div className="tutorial">
              <div className="tutorial-bubble tutorial-clear">
                Press for clear data <span className="tutorial-arrow">&rarr;</span>
              </div>
              <div className="tutorial-bubble tutorial-bubble-blue tutorial-on">
                Turn on the Pokedex! <span className="tutorial-arrow">&rarr;</span>
              </div>
              <div className="tutorial-bubble tutorial-shiny">
                Get shiny mode! <span className="tutorial-arrow">&rarr;</span>
              </div>
              <div className="tutorial-bubble tutorial-random">
                <span className="tutorial-arrow">&larr;</span> Get random Pokemon!
              </div>
              <div className="tutorial-bubble tutorial-input">
                Write a name of<br />a Pokemon or a<br />random number{' '}
                <span className="tutorial-arrow">&rarr;</span>
              </div>
              <div className="tutorial-bubble tutorial-zoom">
                <span className="tutorial-arrow">&larr;</span> Press for image zoom in and out
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default App;