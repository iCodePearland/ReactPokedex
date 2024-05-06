function Buttons({ isOn, setIsOn, setImgSrc, setHaveResult }) {

  // Handle turn on/off
  const handleTurnOnOff = () => {
    setIsOn(!isOn);
  };

  // Handle clear data
  const handleClearData = () => {
    // Assuming these states are defined in the parent component
    setImgSrc('');
    setHaveResult(false);
  };

  // Handle shiny mode
  const handleShinyMode = () => {
    // Assuming these states are defined in the parent component
    if (!setImgSrc || !setHaveResult) return;
    setImgSrc(prevSrc => {
      if (prevSrc.includes('shiny')) {
        // Remove shiny suffix if it exists
        return prevSrc.replace('_shiny.png', '.png');
      } else {
        // Add shiny suffix
        return prevSrc.replace('.png', '_shiny.png');
      }
    });
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

  return (
    <div className='buttons-container'>
      <button className={`pokedex-button-on ${isOn ? 'is-enabled' : ''}`} onClick={handleTurnOnOff}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <button className={`pokedex-button-shiny ${isOn ? 'is-enabled' : ''}`} onClick={handleShinyMode}>
        Shiny
      </button>
      <button className={`pokedex-button-zoom-in ${isOn ? 'is-enabled' : ''}`} onClick={handleZoomIn}>
        +
      </button>
      <button className={`pokedex-button-zoom-out ${isOn ? 'is-enabled' : ''}`} onClick={handleZoomOut}>
        -
      </button>
      <button className={`pokedex-button-clear ${isOn ? 'is-enabled' : ''}`} onClick={handleClearData}>
        x
      </button>
    </div>
  );
}

export default Buttons;