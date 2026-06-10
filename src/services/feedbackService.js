import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

export const submitProjectFeedback = (projectId, feedback) => {
  return axios.post(`${API_BASE_URL}/projects/${projectId}/feedback`, feedback);
};

export const getApprovedProjectFeedback = (projectId) => {
  return axios.get(`${API_BASE_URL}/projects/${projectId}/feedback/approved`);
};

export const submitActivityFeedback = (activityId, feedback) => {
  return axios.post(
    `${API_BASE_URL}/activities/${activityId}/feedback`,
    feedback,
  );
};

export const getApprovedActivityFeedback = (activityId) => {
  return axios.get(
    `${API_BASE_URL}/activities/${activityId}/feedback/approved`,
  );
};

export const getAllFeedback = () => {
  return axios.get(`${API_BASE_URL}/admin/feedback`);
};

export const approveFeedback = (id) => {
  return axios.put(`${API_BASE_URL}/admin/feedback/${id}/approve`);
};

export const rejectFeedback = (id) => {
  return axios.put(`${API_BASE_URL}/admin/feedback/${id}/reject`);
};

export const deleteFeedback = (id) => {
  return axios.delete(`${API_BASE_URL}/admin/feedback/${id}`);
};
