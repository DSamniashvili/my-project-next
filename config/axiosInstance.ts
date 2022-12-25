import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

export const axiosInstance = axios.create({
   baseURL: process.env.API_HOST,
   headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
   },
   withCredentials: true,
});

axiosInstance.interceptors.request.use(
   (config: AxiosRequestConfig<any>) => {
      // We will save token in the future - IF NEEDED and attach to every request
      // const token = sessionStorage.getItem('token');
      // if(token){
      // 	if(config && config.headers) config.headers.Authorization = `Bearer ${token}`
      // }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   },
);

axiosInstance.interceptors.response.use(
   (response: AxiosResponse<any, any>) => {
      return response;
   },
   (error) => {
      return Promise.reject(error);
   },
);
