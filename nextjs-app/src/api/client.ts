import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

const client: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token if available
client.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor for error handling
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - clear token and redirect to login
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default client;
