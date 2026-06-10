import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivityById } from "../services/activityService";
import {
  getApprovedActivityFeedback,
  submitActivityFeedback,
} from "../services/feedbackService";

function ActivityDetails() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [feedbackList, setFeedbackList] = useState([]);

  const [feedback, setFeedback] = useState({
    reviewer: "",
    role: "",
    comment: "",
  });

  const [message, setMessage] = useState("");

  const loadApprovedFeedback = () => {
    getApprovedActivityFeedback(id)
      .then((response) => {
        setFeedbackList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching approved activity feedback:", error);
      });
  };

  useEffect(() => {
    getActivityById(id)
      .then((response) => {
        setActivity(response.data);
      })
      .catch((error) => {
        console.error("Error fetching activity details:", error);
      });
    loadApprovedFeedback();
  }, [id]);

  const handleFeedbackChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    submitActivityFeedback(id, feedback)
      .then(() => {
        setMessage(
          "Thank you for your feedback. It has been submitted for review and will appear after verification.",
        );

        setFeedback({
          reviewer: "",
          role: "",
          comment: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting activity feedback:", error);
        setMessage("Failed to submit feedback. Please try again.");
      });
  };

  if (!activity) {
    return <p>Loading activity details...</p>;
  }

  return (
    <div className="section">
      <h1 className="section-title">{activity.title}</h1>

      <div className="card">
        <p>{activity.content}</p>

        <p>
          <strong>Date:</strong> {activity.date}
        </p>

        <p>
          <strong>Featured:</strong> {activity.featured ? "Yes" : "No"}
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Approved Feedback</h2>

        {feedbackList.length === 0 ? (
          <p>No approved feedback yet. Be the first to share feedback.</p>
        ) : (
          feedbackList.map((item) => (
            <div className="card" key={item.id}>
              <h3>{item.reviewer}</h3>
              <p>
                <strong>Role:</strong> {item.role}
              </p>
              <p>{item.comment}</p>
            </div>
          ))
        )}
      </div>
      <div className="section">
        <h2 className="section-title">Share Feedback</h2>

        {message && <p className="success-message">{message}</p>}

        <form onSubmit={handleFeedbackSubmit} className="form">
          <input
            type="text"
            name="reviewer"
            placeholder="Your Name"
            value={feedback.reviewer}
            onChange={handleFeedbackChange}
            required
          />

          <input
            type="text"
            name="role"
            placeholder="Role e.g. Faculty, Recruiter, Friend"
            value={feedback.role}
            onChange={handleFeedbackChange}
          />

          <textarea
            name="comment"
            placeholder="Write your feedback"
            value={feedback.comment}
            onChange={handleFeedbackChange}
            required
          />

          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
}

export default ActivityDetails;
