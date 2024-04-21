import { Image } from '@/components/atoms'
import { type User } from '@/libs/types/user-type'

import { Email, Location, MenuBar, Verified } from '../svgs'

const Header: React.FC<{ user?: User }> = ({ user }) => (
  <header className='relative flex w-full items-start justify-between gap-[19px] px-[20px] pb-[5px] pt-[36px]'>
    <div className='h-[40px] min-w-[40px] overflow-hidden rounded-full bg-gray-200'>
      {user?.username && (
        <Image
          src={`https://via.placeholder.com/150/3FC4B6/FFFFFF?text=${user.username}`}
          alt='Profile'
          width={40}
          height={40}
        />
      )}
    </div>
    <div className='-mt-1 flex w-full flex-col items-start justify-center'>
      {user?.name && (
        <h1 className='flex items-center gap-[11px] text-[20px] font-semibold leading-[30px] text-[#031727]'>
          {user?.name} <Verified />
        </h1>
      )}
      {user?.name && (
        <p className='text-[12px] leading-[18px] text-[#969696]'>
          Professional Food Photographer
        </p>
      )}
      {user?.name && (
        <div className='flex flex-wrap items-start gap-[15px]'>
          <div className='flex items-center gap-[11px]'>
            <Location />
            <p className='text-[11px] leading-[16.5px] text-[#969696]'>
              {user?.address.city}
            </p>
          </div>
          <div className='flex items-center gap-[11px]'>
            <Email />
            <p className='whitespace-nowrap text-[11px] leading-[16.5px] text-[#969696]'>
              {user?.email}
            </p>
          </div>
        </div>
      )}
    </div>
    <MenuBar />
  </header>
)

export { Header }
