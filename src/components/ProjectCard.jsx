import { Link } from "react-router-dom";
function ProjectCard({ id, title, description, techStack, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Tech Stack:</strong> {techStack}
      </p>
      <br />
      {id && (
        <Link to={`/projects/${id}`} className="details-link">
          View Details
        </Link>
      )}

      {(onEdit || onDelete) && (
        <div>
          {onEdit && <button onClick={onEdit}>Edit</button>}
          {onDelete && <button onClick={onDelete}>Delete</button>}
        </div>
      )}
    </div>
  );
}
export default ProjectCard;
