import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div>
      <h1 className="section-title">Projects</h1>

      <ProjectCard
        title="Employee Management System"
        description="A backend CRUD application for adding, viewing, updating, and deleting employee records."
        techStack="Java, Spring Boot, MySQL, REST API"
      />

      <ProjectCard
        title="Vulnerability Intelligence API"
        description="A backend project that parses JSON vulnerability data and provides filtering, searching, sorting, and pagination."
        techStack="Java, Spring Boot, JSON, JPA, MySQL"
      />

      <ProjectCard
        title="Sign Language Recognition Project"
        description="An accessibility project focused on converting sign language gestures into readable text."
        techStack="Python, Computer Vision, Machine Learning"
      />
    </div>
  );
}

export default Projects;
