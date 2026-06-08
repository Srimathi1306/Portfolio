function ProjectCard({ title, description, techStack, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Tech Stack:</strong> {techStack}
      </p>
      {onEdit && <button onClick={onEdit}>Edit</button>}
      {onDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}
export default ProjectCard;
