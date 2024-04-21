import axiosInstance, { type CustomAxiosResponse } from '../axios'
import { type User } from '../types/user-type'

export const fetchUser = (): Promise<CustomAxiosResponse & { data: User }> =>
  axiosInstance.get('/users/1')
