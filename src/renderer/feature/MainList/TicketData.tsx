import { ColumnDef, createColumnHelper, getCoreRowModel, useReactTable , Table, flexRender} from "@tanstack/react-table"
import React from "react"
import { TTicket } from "../../../@type/TTicket"

const columnHelper  = createColumnHelper<TTicket>()
const columns: ColumnDef<TTicket>[] = [
  {accessorKey: 'title', header: 'タイトル'},
  {accessorKey: 'no', header: 'no'},
  {accessorKey: 'status', header: 'ステータス'},
  {accessorKey: 'asignee', header: '担当者'},
]

const data: TTicket[] = [
  {title:'t', no:'n', status: 's', asignee:'a'},
  {title:'t', no:'n', status: 's', asignee:'a'},
  {title:'t', no:'n', status: 's', asignee:'a'},
]


const TicketData = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    debugTable:true,
    debugHeaders: true,
    debugColumns:true,
    debugCells:true,
    columnResizeMode:"onChange",
  })

  return(
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) =>(
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default TicketData