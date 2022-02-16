import axios from "axios";

export const FakestoreService = axios.create({
  baseURL: process.env.REACT_APP_FAKESTORE_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export default FakestoreService;