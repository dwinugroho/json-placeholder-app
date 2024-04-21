import React from 'react'

import useInfiniteScroll from '@/hooks/use-infinite-scroll'

type InfiniteScrollProps = {
  fetchData: () => Promise<void>
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ fetchData }) => {
  const [isFetching] = useInfiniteScroll(fetchData)

  return <>{isFetching && <></>}</>
}

export { InfiniteScroll }
