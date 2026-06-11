import axios from "axios";

const API_URL = "http://localhost:8080";

export const submitContactMessage = (message) => {
  return axios.post(`${API_URL}/contact`, message);
};

export const getContactMessages = () => {
  return axios.get(`${API_URL}/admin/messages`);
};

export const markMessageAsRead = (id) => {
  return axios.put(`${API_URL}/admin/messages/${id}/read`);
};

export const markMessageAsReplied = (id) => {
  return axios.put(`${API_URL}/admin/messages/${id}/replied`);
};

export const deleteContactMessage = (id) => {
  return axios.delete(`${API_URL}/admin/messages/${id}`);
};
