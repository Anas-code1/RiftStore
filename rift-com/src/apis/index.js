import axios from 'axios';

const client = axios.create({ 
  baseURL: import.meta.env.VITE_API_BASE_URL || 'ttps://riftstore-backend.onrender.com' 
});

export default client;