
function InputForm ({ inputValue, handleInputChange, handleSubmit, isOn }) {
  return (
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
  );
};

export default InputForm;