import React, { useEffect, useState } from 'react'
import Header from './Header'
import TicketList from './TicketList'
import CommitList from './CommitList'
import { debugObj, devLog } from '../../../util/common'
import { EmptySetting, TSetting } from '../../../@type/TSetting'

const MainList = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [settingData, setSettingData] = useState<TSetting>(EmptySetting)
  const [isTicketList, setIsTicketList] = useState<Boolean>(true)

  useEffect(() => {
    const load = async() => {
      const data = await window.mainApi.getSetting()
      setSettingData(data)
      setIsLoading(false)
    }
    load()
  }, [isLoading])

  return (
    <>
      <Header repositoryList={settingData.repositoryList} styles="px-[1.5em] pt-[1em]" />
      {(isTicketList)
        ? <TicketList />
        : <CommitList/>
      }
    </>
  )
}

export default MainList
