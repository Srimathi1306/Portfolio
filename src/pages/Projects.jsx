import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../services/projectService";

function Projects() {
  const [filter, setFilter] = useState("All");
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

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <div>
      <h1 className="section-title">Projects</h1>
      <div className="filter-buttons">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        <button
          className={filter === "Backend" ? "active" : ""}
          onClick={() => setFilter("Backend")}
        >
          Backend
        </button>

        <button
          className={filter === "AI" ? "active" : ""}
          onClick={() => setFilter("AI")}
        >
          AI
        </button>
        <button
          className={filter === "Full Stack" ? "active" : ""}
          onClick={() => setFilter("Full Stack")}
        >
          Full Stack
        </button>
      </div>
      <br />
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
        />
      ))}
    </div>
  );
}

export default Projects;
