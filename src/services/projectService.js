import axios from "axios";

const API_URL = "http://localhost:8080/projects";

export const getProjects = () => {
  return axios.get(API_URL);
};

export const addProject = (project) => {
  return axios.post(API_URL, project);
};
