import { useEffect, useState, useRef } from "react";
import {
  addProject,
  getProjects,
  deleteProject,
  updateProject,
  getFeaturedProjects,
} from "../services/projectService";
import {
  getActivities,
  addActivity,
  updateActivity,
  deleteActivity,
  getFeaturedActivities,
} from "../services/activityService";
import {
  getAllFeedback,
  approveFeedback,
  rejectFeedback,
  deleteFeedback,
} from "../services/feedbackService";
import ProjectCard from "../components/ProjectCard";
import ActivityCard from "../components/ActivityCard";
import ReviewCard from "../components/ReviewCard";

function Admin() {
  const [project, setProject] = useState({
    title: "",
    description: "",
    techStack: "",
    category: "",
    featured: false,
  });
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const projectFormRef = useRef(null);

  const [activity, setActivity] = useState({
    title: "",
    content: "",
    date: "",
    featured: false,
  });

  const [activities, setActivities] = useState([]);
  const [editingActivityId, setEditingActivityId] = useState(null);
  const activityFormRef = useRef(null);

  const [feedbackList, setFeedbackList] = useState([]);
  const [feedbackFilter, setFeedbackFilter] = useState("ALL");

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

  const loadFeedback = () => {
    getAllFeedback()
      .then((response) => {
        setFeedbackList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [featuredProjectCount, setFeaturedProjectCount] = useState(0);
  const [featuredActivityCount, setFeaturedActivityCount] = useState(0);

  const fetchDashboardCounts = () => {
    getFeaturedProjects()
      .then((response) => {
        setFeaturedProjectCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching featured projects count:", error);
      });

    getFeaturedActivities()
      .then((response) => {
        setFeaturedActivityCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching featured activities count:", error);
      });
  };

  useEffect(() => {
    loadProjects();
    loadActivities();
    loadFeedback();
    fetchDashboardCounts();
  }, []);

  const handleProjectChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProject({
      ...project,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (editingId !== null) {
      updateProject(editingId, project)
        .then(() => {
          loadProjects();
          fetchDashboardCounts();

          setEditingId(null);

          setProject({
            title: "",
            description: "",
            techStack: "",
            category: "",
            featured: false,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      addProject(project)
        .then(() => {
          loadProjects();
          fetchDashboardCounts();

          setProject({
            title: "",
            description: "",
            techStack: "",
            category: "",
            featured: false,
          });
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to add project");
        });
    }
  };

  const handleProjectDelete = (id) => {
    deleteProject(id)
      .then(() => {
        loadProjects();
        fetchDashboardCounts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleProjectEdit = (selectedProject) => {
    setEditingId(selectedProject.id);

    setProject({
      title: selectedProject.title,
      description: selectedProject.description,
      techStack: selectedProject.techStack,
      category: selectedProject.category,
      featured: selectedProject.featured || false,
    });
    projectFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleActivityChange = (e) => {
    const { name, value, type, checked } = e.target;

    setActivity({
      ...activity,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleActivitySubmit = (e) => {
    e.preventDefault();

    if (editingActivityId !== null) {
      updateActivity(editingActivityId, activity)
        .then(() => {
          loadActivities();
          fetchDashboardCounts();

          setEditingActivityId(null);

          setActivity({
            title: "",
            content: "",
            date: "",
            featured: false,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      addActivity(activity)
        .then(() => {
          loadActivities();
          fetchDashboardCounts();

          setActivity({
            title: "",
            content: "",
            date: "",
            featured: false,
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
      featured: selectedActivity.featured || false,
    });
    activityFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleActivityDelete = (id) => {
    deleteActivity(id)
      .then(() => {
        loadActivities();
        fetchDashboardCounts();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleApproveFeedback = (id) => {
    approveFeedback(id)
      .then(() => {
        loadFeedback();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRejectFeedback = (id) => {
    rejectFeedback(id)
      .then(() => {
        loadFeedback();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteFeedback = (id) => {
    deleteFeedback(id)
      .then(() => {
        loadFeedback();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const filteredFeedbackList = feedbackList.filter((feedback) => {
    if (feedbackFilter === "ALL") {
      return true;
    }

    if (feedbackFilter === "PENDING") {
      return feedback.status === "PENDING";
    }

    if (feedbackFilter === "APPROVED") {
      return feedback.status === "APPROVED";
    }

    if (feedbackFilter === "REJECTED") {
      return feedback.status === "REJECTED";
    }

    if (feedbackFilter === "PROJECT") {
      return feedback.project !== null;
    }

    if (feedbackFilter === "ACTIVITY") {
      return feedback.activity !== null;
    }

    return true;
  });

  const totalFeedbackCount = feedbackList.length;

  const pendingFeedbackCount = feedbackList.filter(
    (feedback) => feedback.status === "PENDING",
  ).length;

  const approvedFeedbackCount = feedbackList.filter(
    (feedback) => feedback.status === "APPROVED",
  ).length;

  const rejectedFeedbackCount = feedbackList.filter(
    (feedback) => feedback.status === "REJECTED",
  ).length;

  return (
    <div className="section">
      <h1 className="section-title">Admin Dashboard</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Projects</h3>
          <p>{projects.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>Featured Projects</h3>
          <p>{featuredProjectCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Activities</h3>
          <p>{activities.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>Featured Activities</h3>
          <p>{featuredActivityCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Feedback</h3>
          <p>{totalFeedbackCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Pending Feedback</h3>
          <p>{pendingFeedbackCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Approved Feedback</h3>
          <p>{approvedFeedbackCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Rejected Feedback</h3>
          <p>{rejectedFeedbackCount}</p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Projects</h2>
        <div className="card" ref={projectFormRef}>
          <h2>{editingId !== null ? "Update Project" : "Add Project"}</h2>

          <form onSubmit={handleProjectSubmit} className="form">
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={project.title}
              onChange={handleProjectChange}
              required
            />

            <textarea
              name="description"
              placeholder="Project Description"
              value={project.description}
              onChange={handleProjectChange}
              required
            />

            <input
              type="text"
              name="techStack"
              placeholder="Tech Stack"
              value={project.techStack}
              onChange={handleProjectChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={project.category}
              onChange={handleProjectChange}
            />

            <label>
              <input
                type="checkbox"
                name="featured"
                checked={project.featured || false}
                onChange={handleProjectChange}
              />
              Show on Home Page
            </label>

            <button type="submit">
              {editingId ? "Update Project" : "Add Project"}
            </button>
          </form>
        </div>

        <h2 className="section-title">Project List</h2>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            onEdit={() => handleProjectEdit(project)}
            onDelete={() => handleProjectDelete(project.id)}
          />
        ))}
      </div>

      <div className="section">
        <h2 className="section-title">Activities</h2>
        <div className="card" ref={activityFormRef}>
          <h2>
            {editingActivityId !== null ? "Update Activity" : "Add Activity"}
          </h2>

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

            <label>
              <input
                type="checkbox"
                name="featured"
                checked={activity.featured || false}
                onChange={handleActivityChange}
              />
              Show on Home Page
            </label>

            <button type="submit">
              {editingActivityId !== null ? "Update Activity" : "Add Activity"}
            </button>
          </form>
        </div>

        <h2 className="section-title">Activity List</h2>

        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            id={activity.id}
            title={activity.title}
            date={activity.date}
            content={activity.content}
            onEdit={() => handleActivityEdit(activity)}
            onDelete={() => handleActivityDelete(activity.id)}
          />
        ))}
      </div>

      <div className="section">
        <h2 className="section-title">Feedback Moderation</h2>

        <div className="filter-buttons">
          <button
            className={feedbackFilter === "ALL" ? "active" : ""}
            onClick={() => setFeedbackFilter("ALL")}
          >
            All
          </button>

          <button
            className={feedbackFilter === "PENDING" ? "active" : ""}
            onClick={() => setFeedbackFilter("PENDING")}
          >
            Pending
          </button>

          <button
            className={feedbackFilter === "APPROVED" ? "active" : ""}
            onClick={() => setFeedbackFilter("APPROVED")}
          >
            Approved
          </button>

          <button
            className={feedbackFilter === "REJECTED" ? "active" : ""}
            onClick={() => setFeedbackFilter("REJECTED")}
          >
            Rejected
          </button>

          <button
            className={feedbackFilter === "PROJECT" ? "active" : ""}
            onClick={() => setFeedbackFilter("PROJECT")}
          >
            Project Feedback
          </button>

          <button
            className={feedbackFilter === "ACTIVITY" ? "active" : ""}
            onClick={() => setFeedbackFilter("ACTIVITY")}
          >
            Activity Feedback
          </button>
        </div>

        {filteredFeedbackList.length === 0 ? (
          <p>No feedback found for this filter.</p>
        ) : (
          filteredFeedbackList.map((feedback) => (
            <div className="card" key={feedback.id}>
              <h3>{feedback.reviewer}</h3>

              <p>
                <strong>Role:</strong> {feedback.role}
              </p>

              <p>
                <strong>Comment:</strong> {feedback.comment}
              </p>

              <p>
                <strong>Status:</strong> {feedback.status}
              </p>

              <p>
                <strong>Type:</strong>{" "}
                {feedback.project
                  ? "Project Feedback"
                  : feedback.activity
                    ? "Activity Feedback"
                    : "General Feedback"}
              </p>

              {feedback.project && (
                <p>
                  <strong>Project:</strong> {feedback.project.title}
                </p>
              )}

              {feedback.activity && (
                <p>
                  <strong>Activity:</strong> {feedback.activity.title}
                </p>
              )}

              <div>
                {feedback.status !== "APPROVED" && (
                  <button onClick={() => handleApproveFeedback(feedback.id)}>
                    Approve
                  </button>
                )}

                {feedback.status !== "REJECTED" && (
                  <button onClick={() => handleRejectFeedback(feedback.id)}>
                    Reject
                  </button>
                )}

                <button onClick={() => handleDeleteFeedback(feedback.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;
