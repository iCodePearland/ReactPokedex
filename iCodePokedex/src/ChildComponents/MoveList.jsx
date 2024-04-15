import MoveEntry from '../Components/MoveEntry';

function MoveList(props) {
  const { moves } = props;

  return (
    <div className="move-list">
      {moves.map((move, index) => (
        <MoveEntry key={index} move={move} />
      ))}
    </div>
  );
}

export default MoveList;