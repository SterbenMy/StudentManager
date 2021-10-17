import axios from "axios";

const httpClient = axios.create({
  baseURL: `http://localhost:8080/api/`,
  headers: {
    Accept: "application/json;charset=UTF-8",
    "Content-Type": "application/json;charset=UTF-8",
  },
  timeout: 0,
});

const responseInterceptor = (response) => {
  return response.data;
};

httpClient.interceptors.response.use(responseInterceptor);

export default httpClient;
