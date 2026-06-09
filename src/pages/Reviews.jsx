import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { getReviews } from "../services/reviewService";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews()
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="section-title">Reviews & Advice</h1>

      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          reviewer={review.reviewer}
          role={review.role}
          comment={review.comment}
        />
      ))}
    </div>
  );
}

export default Reviews;
