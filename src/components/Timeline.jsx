import timeline from "../data/timeline";

function Timeline() {
  return (
    <div className="section">
      <h2 className="section-title">Learning Journey</h2>

      {timeline.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.year}</h3>

          <p>{item.event}</p>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
