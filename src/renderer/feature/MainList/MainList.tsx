import React, { useState } from 'react'
import Header from './Header'
import TicketList from './TicketList'
import CommitList from './CommitList'

const MainList = () => {
  const [isTicketList, setIsTicketList] = useState<Boolean>(true)
  return (
    <>
      <Header styles="px-[1.5em] pt-[1em]" />
      {(isTicketList) 
        ? <TicketList />
        : <CommitList/>
      }
    </>
  )
}

export default MainList
