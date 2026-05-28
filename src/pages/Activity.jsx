import ActivityCard from "../components/ActivityCard";

function Activity() {
  return (
    <div>
      <h1 className="section-title">Activity</h1>

      <ActivityCard
        title="Portfolio Day 1 Completed"
        date="Day 1"
        content="Created React project, pages, routing, and GitHub repository."
      />

      <ActivityCard
        title="Portfolio Day 2 Started"
        date="Day 2"
        content="Working on reusable components, layout, and project card sections."
      />
    </div>
  );
}

export default Activity;
