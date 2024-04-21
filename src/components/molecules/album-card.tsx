'use client'

import { type FC, useEffect, useState } from 'react'

import { fetchPhotosbyAlbumID } from '@/libs/api/photo'
import { type Album } from '@/libs/types/album-type'
import { type Photo } from '@/libs/types/photo-type'
import cn from '@/utils/cn'

import { Image } from '../atoms'

const AlbumCard: FC<{ album: Album; isActive: boolean }> = ({
  album,
  isActive
}) => {
  const [photo, setPhoto] = useState<Photo>({
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  })

  useEffect(() => {
    void fetchPhotosbyAlbumID({ albumId: 1, _limit: 1 }).then((res) => {
      setPhoto((prevState) => ({
        ...prevState,
        ...res.data[0]
      }))
    })
  }, [album])
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-[8px] bg-[#F89F1E] transition-all',
        {
          'shadow-[0px_5px_10px_0px_#FF97004D]': isActive,
          'scale-[1.4]': isActive
        }
      )}
    >
      <div
        className={cn(
          'w-full overflow-hidden rounded-[8px_8px_0_8px] bg-gray-300',
          isActive ? 'aspect-[18/10]' : 'aspect-[14/10]'
        )}
      >
        {photo.thumbnailUrl && (
          <Image
            src={photo.thumbnailUrl}
            alt={album.title}
            width={150}
            height={150}
            lazy={false}
            className='size-full object-cover'
          />
        )}
      </div>
      {isActive && (
        <div className='px-[10px] py-[6px]'>
          <p className='text-[11px] font-[400] leading-[13px] text-white'>
            {album.title}
          </p>
        </div>
      )}
    </div>
  )
}

export { AlbumCard }
