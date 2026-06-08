import axios from "axios";

const API_URL = "http://localhost:8080/activities";

export const getActivities = () => {
  return axios.get(API_URL);
};

export const addActivity = (activity) => {
  return axios.post(API_URL, activity);
};

export const updateActivity = (id, activity) => {
  return axios.put(`${API_URL}/${id}`, activity);
};

export const deleteActivity = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
