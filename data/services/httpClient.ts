import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import tokenService from './tokenService';

const DEBUG = process.env.NODE_ENV === "development";

function createAxios(): AxiosInstance {
    const client: AxiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
    })

    client.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            let token = tokenService.getToken()
            if (token === "") {
                return config
            }
            if (config.headers != undefined)
                config.headers['Authorization'] = `Bearer ${token}`;
            return config
        },
        (error) => {
            if (DEBUG) {
                console.error("interceptor error => ", error)
            }
            return Promise.reject(error);
        })
    return client
}

const client = createAxios()

export default client
