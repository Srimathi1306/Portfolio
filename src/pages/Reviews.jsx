import ReviewCard from "../components/ReviewCard";
import reviews from "../data/reviews";

function Reviews() {
  return (
    <div>
      <h1 className="section-title">Reviews</h1>

      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.name}
          comment={review.comment}
        />
      ))}
    </div>
  );
}

export default Reviews;
