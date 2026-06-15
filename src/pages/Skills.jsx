function Skills() {
  return (
    <div className="section">
      <h1 className="section-title">Skills</h1>

      <div className="card">
        <h3>Programming Languages</h3>
        <div className="skills-container">
          <span className="skill-badge">Java</span>
          <span className="skill-badge">Python</span>
          <span className="skill-badge">JavaScript</span>
        </div>
      </div>

      <div className="card">
        <h3>Frontend</h3>
        <div className="skills-container">
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">CSS</span>
          <span className="skill-badge">React</span>
          <span className="skill-badge">Vite</span>
        </div>
      </div>

      <div className="card">
        <h3>Backend</h3>
        <div className="skills-container">
          <span className="skill-badge">Spring Boot</span>
          <span className="skill-badge">REST API</span>
          <span className="skill-badge">JWT Authentication</span>
          <span className="skill-badge">Node.js</span>
          <span className="skill-badge">Express.js</span>
        </div>
      </div>

      <div className="card">
        <h3>Database</h3>
        <div className="skills-container">
          <span className="skill-badge">MySQL</span>
          <span className="skill-badge">MongoDB</span>
        </div>
      </div>

      <div className="card">
        <h3>Tools</h3>
        <div className="skills-container">
          <span className="skill-badge">Git</span>
          <span className="skill-badge">GitHub</span>
          <span className="skill-badge">Postman</span>
          <span className="skill-badge">VS Code</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
