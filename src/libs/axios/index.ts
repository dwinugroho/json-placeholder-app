import axios from 'axios'
import { type AxiosResponse } from 'axios'

// Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    void Promise.reject(error)
  }
)

export type CustomAxiosResponse<T = unknown> = AxiosResponse<T> & {
  totalCount?: number
}

axiosInstance.interceptors.response.use(
  (response: CustomAxiosResponse) => {
    if (Array.isArray(response.data) && response.headers['x-total-count']) {
      response.totalCount = Number.parseInt(
        String(response.headers['x-total-count'])
      )
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
