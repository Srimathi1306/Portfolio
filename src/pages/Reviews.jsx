import ReviewCard from "../components/ReviewCard";

function Reviews() {
  return (
    <div>
      <h1 className="section-title">Reviews & Suggestions</h1>

      <ReviewCard
        name="Faculty Reviewer"
        comment="Focus more on explaining the problem statement and your technical contribution."
      />

      <ReviewCard
        name="Company Reviewer"
        comment="Add deployed links and GitHub repositories for every project."
      />
    </div>
  );
}

export default Reviews;
