import axios from "axios";
import { BASE_URL } from "../constants.js";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
