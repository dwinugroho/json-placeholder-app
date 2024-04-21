import axiosInstance, { type CustomAxiosResponse } from '../axios'
import { type Album } from '../types/album-type'

export const fetchAlbums = (): Promise<
  CustomAxiosResponse & { data: Album[] }
> =>
  axiosInstance.get('/albums', {
    params: {
      _limit: 10
    }
  })
