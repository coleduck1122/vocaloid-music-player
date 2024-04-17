import axios from 'axios';
import { getCookie } from './cookies.js';
import { ElMessage } from "element-plus";

const http = axios.create({
  timeout: 30000,
  baseURL: import.meta.env.VITE_APP_WEB_URL
});

const ignoreState = ['/login/qr/check'];
http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (!config.params) {
    config.params = {};
  }
  const cookie = localStorage.getItem(`MUSIC_U`);
  if (cookie) {
    config.params.cookie = `MUSIC_U=${cookie};`;
  }
  config.params.timestamp = Date.now();
  return config;
}, (error) => {
  return Promise.reject(error);
});

http.interceptors.response.use((response) => {
  const { status, data } = response;
  const code = data && data.code;
  const url = response.config.url ? response.config.url.split('?')[0] : '';
  if (!ignoreState.includes(url) && (status !== 200 || code !== 200)) {
    ElMessage.error(data.message || `请求出现错误，当前状态码为${code || status}`);
    return Promise.reject(data);
  }
  return data;
}, (error) => {
  ElMessage.error(error.message);
  return Promise.reject(error.response.data);
});


const request = (url, method, config) => {
  if (typeof url !== "string") {
    return http(url);
  } else if (method === undefined) {
    return request(url, 'post');
  } else if (typeof method === "string") {
    return http({
      ...config,
      url,
      method,
    });
  } else if (typeof method === 'object' && config === undefined) {
    return http.post(url, method);
  } else if (typeof config === 'string') {
    return http({
      url,
      [config.toLowerCase() !== 'get' ? 'data' : 'params']: method,
      method: config,
    });
  }
  return http(url);
};

export default request;
