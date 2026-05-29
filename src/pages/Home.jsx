import ProjectCard from "../components/ProjectCard";
import ActivityCard from "../components/ActivityCard";
import ReviewCard from "../components/ReviewCard";
import projects from "../data/projects";

function Home() {
  return (
    <div>
      <section className="section">
        <h1>Hi, I am Srimathi</h1>
        <p>
          Aspiring Java Full Stack Developer focused on Spring Boot, REST APIs,
          MySQL, and real-world project development.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Featured Projects</h2>

        {projects.slice(0, 2).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
          />
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Recent Activity</h2>

        <ActivityCard
          title="Started building my dynamic portfolio"
          date="Day 2"
          content="Created layout, reusable components, and project cards."
        />
      </section>

      <section className="section">
        <h2 className="section-title">Review Preview</h2>

        <ReviewCard
          name="Faculty Reviewer"
          comment="Good project direction. Improve explanation of backend architecture."
        />
      </section>
    </div>
  );
}

export default Home;
