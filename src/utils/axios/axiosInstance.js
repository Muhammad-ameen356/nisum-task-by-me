import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "https://hacker-news.firebaseio.com/v0";

const axiosinstance = axios.create({
  baseURL,
  timeout: 3000,
});

axiosinstance.interceptors.request.use(
  (request) => {
    // Object.assign(request.headers, { link: "abc" });
    return request;
  },
  (error) => {
    console.log(error);
    toast.error(error.message);
  }
);

axiosinstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
    toast.error(error.message);
  }
);

export default axiosinstance;
