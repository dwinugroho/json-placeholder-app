'use client'
import { useCallback, useEffect, useState } from 'react'

type LoadDataFunction = () => Promise<void>

const useInfiniteScroll = (loadData: LoadDataFunction) => {
  const [isFetching, setIsFetching] = useState(false)

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    ) {
      return
    }
    setIsFetching(true)
  }, [isFetching])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (!isFetching) return
    loadData()
      .catch(() => {
        setIsFetching(false)
      })
      .finally(() => setIsFetching(false))
  }, [isFetching, loadData])

  return [isFetching]
}

export default useInfiniteScroll
