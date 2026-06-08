import { useEffect, useState } from "react";
import ActivityCard from "../components/ActivityCard";
import { getActivities } from "../services/activityService";

function Activity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities()
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1 className="section-title">Activity</h1>

      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          title={activity.title}
          date={activity.date}
          content={activity.content}
        />
      ))}
    </div>
  );
}

export default Activity;
