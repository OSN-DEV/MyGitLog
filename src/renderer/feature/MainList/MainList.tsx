import React, { useState } from 'react'
import Header from './Header'
import TicketList from './TicketList'
import CommitList from './CommitList'
import { debugObj, devLog } from '../../../util/common'

const MainList = () => {

  const settingData = window.mainApi.getSetting()
  debugObj(settingData)

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
