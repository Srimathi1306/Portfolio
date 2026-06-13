import axios from "axios";
import { getAuthHeader } from "./authService";

const API_URL = "http://localhost:8080/activities";

export const getActivities = () => {
  return axios.get(API_URL);
};

export const addActivity = (activity) => {
  return axios.post(API_URL, activity, getAuthHeader());
};

export const updateActivity = (id, activity) => {
  return axios.put(`${API_URL}/${id}`, activity, getAuthHeader());
};

export const deleteActivity = (id) => {
  return axios.delete(`${API_URL}/${id}`, getAuthHeader());
};

export const getFeaturedActivities = () => {
  return axios.get(`${API_URL}/featured`);
};

export const getActivityById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
