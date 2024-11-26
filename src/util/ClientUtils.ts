import axios from "axios";

const backendURI = "http://localhost:8080";


const clientUtils = axios.create({
    baseURL: backendURI,
    withCredentials: true,
});

/*
clientUtils.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("jwtToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
*/

export default clientUtils;
