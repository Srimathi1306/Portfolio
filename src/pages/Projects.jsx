import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <div>
      <h1 className="section-title">Projects</h1>

      {projects.map((project) => (
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
