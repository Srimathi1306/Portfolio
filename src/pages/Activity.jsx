import ActivityCard from "../components/ActivityCard";
import activities from "../data/activities";

function Activity() {
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
