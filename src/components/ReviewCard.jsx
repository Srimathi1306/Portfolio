function ReviewCard({ name, comment }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
}

export default ReviewCard;
