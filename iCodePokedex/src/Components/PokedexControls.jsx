function PokedexControls(props) {
  const { controls, no } = props;
  const { next, prev, pick } = controls;

  return (
    <div className="pokedex-controls">
      <button className="control-button" onClick={prev}>
        Previous
      </button>
      <button className="control-button" onClick={pick}>
        Pick
      </button>
      <button className="control-button" onClick={next}>
        Next
      </button>
      <div className="pokedex-no">No. {no}</div>
    </div>
  );
}

export default PokedexControls;