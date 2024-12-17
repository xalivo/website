import axios from "axios";
import {API_URL} from "./deploy-config.ts";

export default axios.create({
    baseURL: API_URL,
});