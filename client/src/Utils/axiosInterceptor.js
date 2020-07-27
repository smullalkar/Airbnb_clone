/* eslint-disable no-console */
import axios from "axios";

let interceptorEnabled = false;

if (process.env.NODE_ENV !== "production") {
  interceptorEnabled = true;
}

const axiosInstance = axios.create({
  baseURL: "https://run.mocky.io/v3/f6484cf3-e2c9-4f96-b5d8-6130ef580990"
});

axiosInstance.interceptors.request.use((request) => {
  if (interceptorEnabled) {
    console.log(`Request: ${request.method} ${request.baseURL}${request.url}`);
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (interceptorEnabled) {
      console.log("Response Status: ", response);
      console.log("Response Summary: ", response);
      console.log("Response Content: ", response);
    }
    return response;
  },
  (error) => {
    console.log("Error", error);
    return error;
  }
);

export default axiosInstance;
