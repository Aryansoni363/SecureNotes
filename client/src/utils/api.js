import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // 🔜 Update if backend port changes
  withCredentials: true, // in case you use cookies for auth
});

export default API;

