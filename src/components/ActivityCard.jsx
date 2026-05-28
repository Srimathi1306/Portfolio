function ActivityCard({ title, date, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{content}</p>
    </div>
  );
}
export default ActivityCard;
