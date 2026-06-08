import { useEffect, useState, useRef } from "react";
import {
  addProject,
  getProjects,
  deleteProject,
  updateProject,
} from "../services/projectService";
import ProjectCard from "../components/ProjectCard";
function Admin() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    techStack: "",
    category: "",
  });
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const formRef = useRef(null);
  const loadProjects = () => {
    getProjects()
      .then((response) => {
        setProjects(response.data);
      })

      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    loadProjects();
  }, []);

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      updateProject(editingId, project)
        .then(() => {
          loadProjects();

          setEditingId(null);

          setProject({
            title: "",
            description: "",
            techStack: "",
            category: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      addProject(project)
        .then(() => {
          loadProjects();

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
    }
  };

  const handleDelete = (id) => {
    deleteProject(id)
      .then(() => {
        loadProjects();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (selectedProject) => {
    setEditingId(selectedProject.id);

    setProject({
      title: selectedProject.title,
      description: selectedProject.description,
      techStack: selectedProject.techStack,
      category: selectedProject.category,
    });
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <h1 className="section-title">Admin Dashboard</h1>

      <div className="card" ref={formRef}>
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

          <button type="submit">
            {editingId ? "Update Project" : "Add Project"}
          </button>
        </form>
      </div>
      <div className="card">
        <h2 className="section-title">Manage Projects</h2>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            onEdit={() => handleEdit(project)}
            onDelete={() => handleDelete(project.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Admin;
