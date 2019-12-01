// import axios from "axios";

// const axiosWithAuth = axios.create({
//   baseURL: "https://buildweek30before30.herokuapp.com/api",
//   withCredentials: true
// });

// export default axiosWithAuth;

import axios from "axios";

const token = localStorage.getItem("token");

const axiosWithAuth = () => {

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://buildweek30before30.herokuapp.com/api",
    withCredentials: true
  });
};

export default axiosWithAuth;