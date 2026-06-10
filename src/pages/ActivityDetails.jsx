import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivityById } from "../services/activityService";

function ActivityDetails() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    getActivityById(id)
      .then((response) => {
        setActivity(response.data);
      })
      .catch((error) => {
        console.error("Error fetching activity details:", error);
      });
  }, [id]);

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
    </div>
  );
}

export default ActivityDetails;
