import { useEffect, useState, useRef } from "react";
import {
  addProject,
  getProjects,
  deleteProject,
  updateProject,
} from "../services/projectService";
import {
  getActivities,
  addActivity,
  updateActivity,
  deleteActivity,
} from "../services/activityService";
import ProjectCard from "../components/ProjectCard";
import ActivityCard from "../components/ActivityCard";

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

  const [activity, setActivity] = useState({
    title: "",
    content: "",
    date: "",
  });

  const [activities, setActivities] = useState([]);
  const [editingActivityId, setEditingActivityId] = useState(null);

  const loadProjects = () => {
    getProjects()
      .then((response) => {
        setProjects(response.data);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const loadActivities = () => {
    getActivities()
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadProjects();
    loadActivities();
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

  const handleActivityChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleActivitySubmit = (e) => {
    e.preventDefault();

    if (editingActivityId !== null) {
      updateActivity(editingActivityId, activity)
        .then(() => {
          loadActivities();

          setEditingActivityId(null);

          setActivity({
            title: "",
            content: "",
            date: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      addActivity(activity)
        .then(() => {
          loadActivities();

          setActivity({
            title: "",
            content: "",
            date: "",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleActivityEdit = (selectedActivity) => {
    setEditingActivityId(selectedActivity.id);

    setActivity({
      title: selectedActivity.title,
      content: selectedActivity.content,
      date: selectedActivity.date,
    });
  };

  const handleActivityDelete = (id) => {
    deleteActivity(id)
      .then(() => {
        loadActivities();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="section">
      <h1 className="section-title">Admin Dashboard</h1>

      <div className="section">
        <h2 className="section-title">Projects</h2>
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

        <h2 className="section-title">Project List</h2>
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

      <div className="section">
        <h2 className="section-title">Activities</h2>
        <div className="card">
          <h2 className="section-title">Add Activity</h2>

          <form onSubmit={handleActivitySubmit} className="form">
            <input
              type="text"
              name="title"
              placeholder="Activity Title"
              value={activity.title}
              onChange={handleActivityChange}
              required
            />

            <textarea
              name="content"
              placeholder="Activity Content"
              value={activity.content}
              onChange={handleActivityChange}
              required
            />

            <input
              type="text"
              name="date"
              placeholder="Date / Day"
              value={activity.date}
              onChange={handleActivityChange}
            />

            <button type="submit">
              {editingActivityId !== null ? "Update Activity" : "Add Activity"}
            </button>
          </form>
        </div>

        <h2 className="section-title">Activity List</h2>

        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            title={activity.title}
            date={activity.date}
            content={activity.content}
            onEdit={() => handleActivityEdit(activity)}
            onDelete={() => handleActivityDelete(activity.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Admin;
