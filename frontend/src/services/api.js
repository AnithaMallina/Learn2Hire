import axios from "axios";

const API = axios.create({
 baseURL: "https://learn2-hireee.vercel.app/api",
});

export default API;