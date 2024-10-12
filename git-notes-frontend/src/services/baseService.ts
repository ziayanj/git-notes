import axios from 'axios';

const baseService = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://git-gists-backend-production.up.railway.app"
      : "http://localhost:4000",
  headers: {
    'Content-Type': 'application/json',
  },
})

baseService.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default baseService;
