'use client'
import React, {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { fetchUser } from '@/libs/api/user'
import type { User } from '@/libs/types/user-type'

export type GlobalDataType = {
  user?: User
}

const GlobalDataContext = createContext<GlobalDataType | undefined>(undefined)

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext)
  if (context === undefined) {
    throw new Error('useGlobalData must be used within a GlobalDataProvider')
  }
  return context
}

export type GlobalDataProviderProps = {
  children: ReactNode
}

export const GlobalDataProvider: React.FC<GlobalDataProviderProps> = ({
  children
}) => {
  const [globalData, setGlobalData] = useState<GlobalDataType>({})

  useEffect(() => {
    void fetchUser().then((res) => {
      setGlobalData({ user: res.data })
    })
  }, [])

  return (
    <GlobalDataContext.Provider value={globalData}>
      {children}
    </GlobalDataContext.Provider>
  )
}
