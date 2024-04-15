import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // Initialize state
  const [isOn, setIsOn] = useState(false);
  const [haveResult, setHaveResult] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [ability, setAbility] = useState('');
  const [type, setType] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Fetch data from API
  const fetchData = async (url) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Pokemon not found!');
      const data = await response.json();
      setImgSrc(data.sprites.front_default);
      setId(data.id);
      setName(data.name);
      setAbility(data.abilities[0].ability.name);
      setType(data.types[0].type.name);
      setHaveResult(true);
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

  // Handle turn on/off
  const handleTurnOnOff = () => {
    setIsOn(!isOn);
  };

  // Handle clear data
  const handleClearData = () => {
    setImgSrc('');
    setId('');
    setName('');
    setAbility('');
    setType('');
    setInputValue('');
    setHaveResult(false);
  };

  // Handle shiny mode
  const handleShinyMode = () => {
    if (!haveResult) return;
    setImgSrc(imgSrc.includes('shiny') ? imgSrc.replace('shiny', '') : imgSrc.replace('.png', '_shiny.png'));
  };

  // Handle zoom in/out
  const handleZoomIn = () => {
    if (!isOn) return;
    document.querySelector('.pokedex-img').classList.add('zoom-in');
  };

  const handleZoomOut = () => {
    if (!isOn) return;
    document.querySelector('.pokedex-img').classList.remove('zoom-in');
  };

  // Add event listeners for random numbers
  useEffect(() => {
    const randomNumberElements = document.querySelectorAll('.randomNumber');
    randomNumberElements.forEach((element) => {
      element.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 1025) + 1;
        setInputValue(randomNumber);
        handleSubmit(event);
      });
    });
    return () => {
      randomNumberElements.forEach((element) => {
        element.removeEventListener('click', () => {});
      });
    };
  }, [inputValue]);

  // Render UI
  return (
    <>
      <a href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/240415/f6e425fddffd7c94415939e505f1ac33.png" alt="pokemon-font" border="0" className='center'/></a>      
      <div className='Wrapper'>
        <div className="pokedex">
          <div className={`pokedex-light ${isOn ? 'is-enabled' : ''}`}></div>
          <div className={`pokedex-screen ${isOn ? 'is-enabled' : ''}`}></div>
          {isError && <div className="pokedex-error">Pokemon not found!<br />Try again!</div>}
          {isLoading && <div className="loader"></div>}
          <div className={`pokedex-data ${isOn ? 'is-enabled' : ''}`}>
            <p className="pokedex-data-text">ID: {id}</p>
            <p className="pokedex-data-text">Name: {name}</p>
            <p className="pokedex-data-text">Ability: {ability}</p>
            <p className="pokedex-data-text">Type: {type}</p>
          </div>
          <img className={`pokedex-img ${isOn ? 'is-enabled' : ''}`} src={imgSrc} alt="" />
          <button className="pokedex-button-on" onClick={handleTurnOnOff}>
            {isOn ? 'OFF' : 'ON'}
          </button>
          <form onSubmit={handleSubmit}>
            <input
              className={`pokedex-input ${isOn ? 'is-enabled' : ''}`}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className={`pokedex-button ${isOn ? 'is-enabled' : ''}`} type="submit">
              Go
            </button>
          </form>
          <button className={`pokedex-button-shiny ${isOn ? 'is-enabled' : ''}`} onClick={handleShinyMode}>
            Shiny
          </button>
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
          <button className={`pokedex-button-zoom-in ${isOn ? 'is-enabled' : ''}`} onClick={handleZoomIn}>
            +
          </button>
          <button className={`pokedex-button-zoom-out ${isOn ? 'is-enabled' : ''}`} onClick={handleZoomOut}>
            -
          </button>
          <button className={`pokedex-button-clear ${isOn ? 'is-enabled' : ''}`} onClick={handleClearData}>
            x
          </button>
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