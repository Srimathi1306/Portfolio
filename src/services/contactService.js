import axios from "axios";
import { getAuthHeader } from "./authService";

const API_URL = import.meta.env.VITE_API_URL;

// Public: user submits contact form
export const submitContactMessage = (message) => {
  return axios.post(`${API_URL}/contact`, message);
};

// Admin: view all contact messages
export const getContactMessages = () => {
  return axios.get(`${API_URL}/admin/messages`, getAuthHeader());
};

// Admin: mark message as read
export const markMessageAsRead = (id) => {
  return axios.put(`${API_URL}/admin/messages/${id}/read`, {}, getAuthHeader());
};

// Admin: mark message as replied
export const markMessageAsReplied = (id) => {
  return axios.put(
    `${API_URL}/admin/messages/${id}/replied`,
    {},
    getAuthHeader(),
  );
};

// Admin: delete message
export const deleteContactMessage = (id) => {
  return axios.delete(`${API_URL}/admin/messages/${id}`, getAuthHeader());
};
