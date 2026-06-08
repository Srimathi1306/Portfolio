function ActivityCard({ title, date, content, onEdit, onDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{content}</p>

      {onEdit && <button onClick={onEdit}>Edit</button>}

      {onDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}

export default ActivityCard;
