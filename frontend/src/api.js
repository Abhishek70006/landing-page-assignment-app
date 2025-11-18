import axios from "axios";
const BASE =
  process.env.REACT_APP_API_URL ||
  "https://landing-page-assignment-app.onrender.com/api";
export default axios.create({ baseURL: BASE });
