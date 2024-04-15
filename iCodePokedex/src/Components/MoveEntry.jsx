function MoveEntry(props) {
  const { move, lvl } = props;
  const { name, accuracy, power, pp } = move;

  return (
    <div className="move-entry">
      <div className="move-name">{name}</div>
      <div className="move-stat">
        <span className="stat-label">Accuracy:</span>
        <span className="stat-value">{accuracy}</span>
      </div>
      <div className="move-stat">
        <span className="stat-label">Power:</span>
        <span className="stat-value">{power}</span>
      </div>
      <div className="move-stat">
        <span className="stat-label">PP:</span>
        <span className="stat-value">{pp}</span>
      </div>
      <div className="move-learn">
        <span className="stat-label">Learn:</span>
        <span className="stat-value">Lvl {lvl}</span>
      </div>
    </div>
  );
}

export default MoveEntry;