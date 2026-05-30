import ProjectCard from "../components/ProjectCard";
import ActivityCard from "../components/ActivityCard";
import ReviewCard from "../components/ReviewCard";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Timeline from "../components/Timeline";
import { getProjects } from "../services/projectService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <section className="section">
        <h1>Hi, I am Srimathi</h1>
        <br />
        <p>Computer Science and Business Systems Student</p>
        <br />
        <p>
          Focused on Java, Spring Boot, REST APIs, MySQL and Full Stack
          Development.
        </p>
        <br />
        <p>
          Currently building real-world backend applications and preparing for
          software engineering roles.
        </p>
        <br />
        <Link to="/projects">
          <button>View Projects</button>
        </Link>

        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </section>
      <Skills />
      <Education />
      <Timeline />

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
