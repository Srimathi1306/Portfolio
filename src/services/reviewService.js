import axios from "axios";

const API_URL = "http://localhost:8080/reviews";

export const getReviews = () => axios.get(API_URL);

export const addReview = (data) => axios.post(API_URL, data);

export const updateReview = (id, data) => axios.put(`${API_URL}/${id}`, data);

export const deleteReview = (id) => axios.delete(`${API_URL}/${id}`);
