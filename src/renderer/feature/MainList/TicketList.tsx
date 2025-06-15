import React, { useMemo } from 'react'
import TicketTitle from './TicketTitle'
import TicketData from './TicketData'
import { TTicket } from '../../../@type/TTicket'
import { ColumnDef } from '@tanstack/react-table'

const TicketList = () => {
  // <div>&nbsp;</div>
  // <div>title</div>
  // <div>status</div>
  // <div>asignee</div>
  const TestData: TTicket[] = [
    {title: "title", no:"no",status:"status", asignee:"asignee"},
    {title: "たいとる", no:"123",status:"done", asignee:"俺"},
  ]

 


  return(
    <>
      <TicketTitle />
      <TicketData />
    </>
  )
}

export default TicketList