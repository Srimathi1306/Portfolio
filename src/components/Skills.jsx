import skills from "../data/skills";

function Skills() {
  return (
    <div className="section">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
