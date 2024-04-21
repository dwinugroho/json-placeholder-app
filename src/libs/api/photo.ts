import axiosInstance, { type CustomAxiosResponse } from '../axios'
import { type Photo } from '../types/photo-type'

export const fetchPhotosbyAlbumID = (
  query: Record<string, number>
): Promise<CustomAxiosResponse & { data: Photo[] }> =>
  axiosInstance.get('/photos', {
    params: query
  })
