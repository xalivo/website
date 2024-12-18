import axios from "axios";
import {API_URL, STATIC_API_URL} from "./deploy-config.ts";

export default axios.create({
    baseURL: API_URL,
});

export const staticApiClient = axios.create({
    baseURL: STATIC_API_URL
});