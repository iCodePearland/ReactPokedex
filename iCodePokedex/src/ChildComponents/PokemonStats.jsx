function PokemonStats(props) {
  const { stats } = props;

  return (
    <div className="pokemon-stats">
      <div className="stat-title">Stats</div>
      <div className="stat-list">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-name">{stat.stat.name}</div>
            <div className="stat-value">{stat.base_stat}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonStats;