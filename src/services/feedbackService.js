import axios from "axios";
import { getAuthHeader } from "./authService";

const API_BASE_URL = import.meta.env.VITE_API_URL;

// Public: user submits project feedback
export const submitProjectFeedback = (projectId, feedback) => {
  return axios.post(`${API_BASE_URL}/projects/${projectId}/feedback`, feedback);
};

// Public: user views approved project feedback
export const getApprovedProjectFeedback = (projectId) => {
  return axios.get(`${API_BASE_URL}/projects/${projectId}/feedback/approved`);
};

// Public: user submits activity feedback
export const submitActivityFeedback = (activityId, feedback) => {
  return axios.post(
    `${API_BASE_URL}/activities/${activityId}/feedback`,
    feedback,
  );
};

// Public: user views approved activity feedback
export const getApprovedActivityFeedback = (activityId) => {
  return axios.get(
    `${API_BASE_URL}/activities/${activityId}/feedback/approved`,
  );
};

// Admin: view all feedback
export const getAllFeedback = () => {
  return axios.get(`${API_BASE_URL}/admin/feedback`, getAuthHeader());
};

// Admin: approve feedback
export const approveFeedback = (id) => {
  return axios.put(
    `${API_BASE_URL}/admin/feedback/${id}/approve`,
    {},
    getAuthHeader(),
  );
};

// Admin: reject feedback
export const rejectFeedback = (id) => {
  return axios.put(
    `${API_BASE_URL}/admin/feedback/${id}/reject`,
    {},
    getAuthHeader(),
  );
};

// Admin: delete feedback
export const deleteFeedback = (id) => {
  return axios.delete(`${API_BASE_URL}/admin/feedback/${id}`, getAuthHeader());
};
