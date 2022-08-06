import axios from "axios";

export const server = axios.create({
    baseURL: "localhost:8080"
})