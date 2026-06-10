import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Activity from "./pages/Activity";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import ProjectDetails from "./pages/ProjectDetails";
import ActivityDetails from "./pages/ActivityDetails";

import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Srimathi Portfolio</h1>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/activities" element={<Activity />} />
            <Route path="/activities/:id" element={<ActivityDetails />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
