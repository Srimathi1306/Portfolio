import ProjectCard from "../components/ProjectCard";
import ActivityCard from "../components/ActivityCard";
import ReviewCard from "../components/ReviewCard";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Timeline from "../components/Timeline";
import { getFeaturedProjects } from "../services/projectService";
import { getFeaturedActivities } from "../services/activityService";
import { getReviews } from "../services/reviewService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Home() {
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getFeaturedProjects()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching featured projects:", error);
      });

    getFeaturedActivities()
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error("Error fetching featured activities:", error);
      });

    getReviews()
      .then((response) => {
        setReviews(response.data);
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

        {projects.length === 0 ? (
          <p>No featured projects selected yet.</p>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              category={project.category}
            />
          ))
        )}
      </section>

      <section className="section">
        <h2 className="section-title">Recent Activity</h2>

        {activities.length === 0 ? (
          <p>No featured activities selected yet.</p>
        ) : (
          activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              content={activity.content}
              date={activity.date}
            />
          ))
        )}
      </section>

      <section className="section">
        <h2 className="section-title">Review Preview</h2>

        {reviews.slice(0, 2).map((review) => (
          <ReviewCard
            key={review.id}
            name={review.reviewer}
            role={review.role}
            comment={review.comment}
          />
        ))}
      </section>
    </div>
  );
}

export default Home;
