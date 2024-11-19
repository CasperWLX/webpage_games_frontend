import axios from "axios";

// Backend URI
const backendURI = "http://localhost:8080";

// Create Axios instance
const clientUtils = axios.create({
    baseURL: backendURI,
});

// Add interceptor to include JWT token in the Authorization header
clientUtils.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("jwtToken"); // or localStorage if you choose
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default clientUtils;
