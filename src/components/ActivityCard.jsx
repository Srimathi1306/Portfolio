import { Link } from "react-router-dom";
function ActivityCard({ id, title, date, content, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{content}</p>
      <br />
      {id && (
        <Link to={`/activities/${id}`} className="details-link">
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
export default ActivityCard;
