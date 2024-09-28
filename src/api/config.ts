import axios from "axios";

// TODO: Add env variable with URL
const URL = 'http://localhost:3001';

export const api = axios.create({
    baseURL: URL
});
