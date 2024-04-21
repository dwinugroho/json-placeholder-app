/* eslint-disable security/detect-object-injection */
'use client'

// components
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { type SetStateAction, useEffect, useRef, useState } from 'react'
import useSWR from 'swr'

import { Image } from '@/components/atoms'
import { AlbumCard, InfiniteScroll } from '@/components/molecules'
import { Header } from '@/components/organisms'
// api
import { useGlobalData } from '@/contexts/global-data-context'
import { fetchAlbums } from '@/libs/api/album'
import { fetchPhotosbyAlbumID } from '@/libs/api/photo'
// types
import type { Photo } from '@/libs/types/photo-type'
import cn from '@/utils/cn'

export const revalidate = 3600

export default function Home() {
  const globalData = useGlobalData()
  const { data: albums, isLoading: albumLoading } = useSWR(
    'albums',
    fetchAlbums
  )
  const [albumFocusIndex, setAlbumFocusIndex] = useState<number>(1)
  const prevAlbumFocusIndex = useRef<number | null>(null)
  const [photos, setPhotos] = useState<{
    data: Photo[]
    _page: number
    _limit: number
    totalCount: number
  }>({
    data: [],
    _page: 1,
    _limit: 20,
    totalCount: 0
  })
  const [photosLoading, setPhotosLoading] = useState<boolean>(false)

  const fetchPhotos = (_page: number, _limit: number) => {
    setPhotosLoading(true)

    if (albums?.data[albumFocusIndex]?.id) {
      void fetchPhotosbyAlbumID({
        albumId: albums?.data[albumFocusIndex]?.id || 1,
        _page,
        _limit
      })
        .then((res) => {
          setPhotos((prevState) => ({
            ...prevState,
            _page,
            _limit,
            data: [...prevState.data, ...res.data],
            totalCount: res.totalCount || 0
          }))
        })
        .finally(() => {
          setPhotosLoading(false)
        })
    }
  }

  useEffect(() => {
    if (prevAlbumFocusIndex.current !== albumFocusIndex) {
      setPhotosLoading(true)
      setPhotos((prevState) => ({ ...prevState, data: [], totalCount: 0 }))
      fetchPhotos(1, 20)
    }
    prevAlbumFocusIndex.current = albumFocusIndex
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [albumFocusIndex])

  return (
    <div className='w-full pb-12'>
      {/* eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values */}
      <div className='sticky -top-[100px] z-10 w-full'>
        <div className='relative w-full'>
          <div className='absolute inset-x-0 bottom-[32%] top-0 w-full bg-white' />
          <Header user={globalData.user} />
          <div className='relative w-full overflow-hidden'>
            {/* eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values */}
            <div className='relative z-10 -ml-[30%] w-[150%]'>
              {albumLoading && (
                <div className='flex w-full items-center gap-14'>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div // eslint-disable-next-line react/no-array-index-key
                      key={`loading-${index}`}
                      className={cn(
                        'flex min-h-[210px] w-full items-center justify-center',
                        { 'scale-[1.4]': index === 1 }
                      )}
                    >
                      <div className='aspect-[14/10] w-full animate-pulse rounded-[8px] bg-gray-300' />
                    </div>
                  ))}
                </div>
              )}
              {!albumLoading && (
                <Splide
                  key='album-list'
                  options={{
                    arrows: false,
                    perPage: 3,
                    gap: '48px',
                    focus: 'center',
                    trimSpace: false
                  }}
                  aria-label='Album List'
                  onActive={(
                    _prev: unknown,
                    next: { index: SetStateAction<number> }
                  ) => {
                    setAlbumFocusIndex(next.index)
                  }}
                >
                  {albums?.data.map((album, index) => (
                    <SplideSlide key={album.id}>
                      <div className='flex min-h-[210px] w-full items-center justify-center'>
                        <AlbumCard
                          album={album}
                          isActive={albumFocusIndex === index}
                        />
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            <p className='absolute -bottom-1 right-14 text-[9px] leading-[13.5] text-[#969696]'>
              {albumFocusIndex + 1} / {albums?.data.length}
            </p>
          </div>
        </div>
      </div>
      <div className='grid w-full grid-cols-2 gap-[10px]'>
        {photos.data.map((photo) => (
          <div key={photo.id} className='relative w-full'>
            <Image
              src={photo.url}
              alt={photo.title}
              width={150}
              height={150}
              className='size-full object-cover'
            />
          </div>
        ))}
        {(photosLoading || albumLoading) &&
          Array.from({ length: 20 }).map((_, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`loading-${index}`}
              className='aspect-square w-full animate-pulse bg-gray-300'
            />
          ))}
      </div>
      {(photos.totalCount > photos.data.length || photos.totalCount === 0) &&
        !photosLoading && (
          <InfiniteScroll
            fetchData={() =>
              // eslint-disable-next-line sonarjs/no-use-of-empty-return-value
              Promise.resolve(fetchPhotos(photos._page + 1, photos._limit))
            }
          />
        )}
    </div>
  )
}
