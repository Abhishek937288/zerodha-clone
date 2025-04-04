// src/axiosConfig.js
import axios from "axios";

axios.defaults.withCredentials = true; 
axios.defaults.baseURL = "http://localhost:3002"; 
export default axios;
