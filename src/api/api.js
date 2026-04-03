import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// User APIs
export const registerUser = (data) => API.post('/register', data);
// data: { name, email, password }

export const loginUser = (data) => API.post('/login', data);
// data: { email, password }

// Application APIs
export const submitApplication = (data) => API.post('/applications/apply', data);
// data: { userId, title, description }

export const getApplicationsByUser = (userId) => API.get(`/applications/${userId}`);

export const updateApplicationStatus = (applicationId, status) =>
  API.put(`/applications/${applicationId}/status`, { status });
// status: PENDING | APPROVED | REJECTED

export default API;
