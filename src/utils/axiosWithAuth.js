import axios from "axios";

const axiosWithAuth = axios.create({
  baseURL: "https://buildweek30before30.herokuapp.com/api",
  withCredentials: true
});

export default axiosWithAuth;