import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../services/projectService";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectById(id)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
      });
  }, [id]);

  if (!project) {
    return <p>Loading project details...</p>;
  }

  return (
    <div className="section">
      <h1 className="section-title">{project.title}</h1>

      <div className="card">
        <p>{project.description}</p>

        <p>
          <strong>Tech Stack:</strong> {project.techStack}
        </p>

        <p>
          <strong>Category:</strong> {project.category}
        </p>

        <p>
          <strong>Featured:</strong> {project.featured ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;
