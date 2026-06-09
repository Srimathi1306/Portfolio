function ReviewCard({ reviewer, role, comment, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{reviewer}</h3>
      <small>{role}</small>
      <p>{comment}</p>

      {onEdit && <button onClick={onEdit}>Edit</button>}

      {onDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}

export default ReviewCard;
