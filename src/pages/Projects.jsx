import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");
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
      </div>
      <br />
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
        />
      ))}
    </div>
  );
}

export default Projects;
