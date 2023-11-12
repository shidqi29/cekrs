import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://rs-bed-covid-api.vercel.app/api",
});
