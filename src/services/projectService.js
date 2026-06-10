import axios from "axios";

const API_URL = "http://localhost:8080/projects";

export const getProjects = () => {
  return axios.get(API_URL);
};

export const addProject = (project) => {
  return axios.post(API_URL, project);
};
export const deleteProject = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
export const updateProject = (id, project) => {
  return axios.put(`${API_URL}/${id}`, project);
};
export const getFeaturedProjects = () => {
  return axios.get(`${API_URL}/featured`);
};
export const getProjectById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
