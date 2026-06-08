function ProjectCard({ title, description, techStack, onDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Tech Stack:</strong> {techStack}
      </p>
      {onDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}
export default ProjectCard;
