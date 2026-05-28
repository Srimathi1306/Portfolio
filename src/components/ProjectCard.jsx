function ProjectCard({ title, description, techStack }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Tech Stack:</strong> {techStack}
      </p>
    </div>
  );
}
export default ProjectCard;
