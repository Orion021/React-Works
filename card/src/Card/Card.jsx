function Card() {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_f4F72JNn6iT8PCUrrmw30J6INTWr9pZfHw&s"
        alt="Sung Jin-Woo"
        className="card-image"
      />

      <div className="card-header">
        <h1>Sung Jin-Woo</h1>
        <span className="alias">Shadow Monarch</span>
      </div>

      <div className="card-body">
        <p>
          <strong>Series:</strong> Solo Leveling
        </p>
        <p>
          <strong>Rank:</strong> E → S-Rank
        </p>
        <p>
          <strong>Class:</strong> Necromancer
        </p>
        <p>
          <strong>Affiliation:</strong> Ahjin Guild (Guild Master)
        </p>

        <h3>Abilities</h3>
        <ul>
          <li>Shadow Extraction</li>
          <li>Shadow Army</li>
          <li>Superhuman Strength & Speed</li>
          <li>Unlimited Growth</li>
        </ul>

        <blockquote>“Arise.”</blockquote>
      </div>
    </div>
  );
}

export default Card;
