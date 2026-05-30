import { useState } from "react";
import { addProject } from "../services/projectService";

function Admin() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    techStack: "",
    category: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProject(project)
      .then(() => {
        alert("Project added successfully");

        setProject({
          title: "",
          description: "",
          techStack: "",
          category: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to add project");
      });
  };

  return (
    <div>
      <h1 className="section-title">Admin Dashboard</h1>

      <div className="card">
        <h2>Add Project</h2>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack"
            value={project.techStack}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={project.category}
            onChange={handleChange}
          />

          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
