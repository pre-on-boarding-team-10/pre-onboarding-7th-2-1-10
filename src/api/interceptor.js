import axios from 'axios';

const interceptor = axios.create({
  baseURL: 'https://preonboarding.platdev.net/api',
  timeout: 5000,
});

interceptor.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

interceptor.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default interceptor;
