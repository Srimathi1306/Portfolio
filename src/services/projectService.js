import axios from "axios";
import { getAuthHeader } from "./authService";

const API_URL = `${import.meta.env.VITE_API_URL}/projects`;

export const getProjects = () => {
  return axios.get(API_URL);
};

export const addProject = (project) => {
  return axios.post(API_URL, project, getAuthHeader());
};

export const updateProject = (id, project) => {
  return axios.put(`${API_URL}/${id}`, project, getAuthHeader());
};

export const deleteProject = (id) => {
  return axios.delete(`${API_URL}/${id}`, getAuthHeader());
};

export const getFeaturedProjects = () => {
  return axios.get(`${API_URL}/featured`);
};
export const getProjectById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
