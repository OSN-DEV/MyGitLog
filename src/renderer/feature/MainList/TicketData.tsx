import { ColumnDef, createColumnHelper, getCoreRowModel, useReactTable , Table, flexRender} from "@tanstack/react-table"
import React from "react"
import { TTicket } from "../../../@type/TTicket"

const columnHelper  = createColumnHelper<TTicket>()
const columns: ColumnDef<TTicket>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      // <input
      //   type="checkbox"
      //   checked={table.getIsAllRowsSelected()}
      //   onChange={table.getToggleAllRowsSelectedHandler()}
      // />
      <></>
    ),
    cell: ({ row }) => (
      <>
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
      {row.original.title}
      </>
      
    ),
    size: 40,
    enableSorting: false,
    enableColumnFilter: false,
  },
  {accessorKey: 'title', header: 'タイトル', size:280},
  {accessorKey: 'no', header: 'no'},
  {accessorKey: 'status', header: 'ステータス'},
  {accessorKey: 'asignee', header: '担当者', size:80},
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
  })

  return(
    <>
    
    <table className="list">
      <thead className="bg-red-200">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) =>(
              <th key={header.id} 
                style={{
                  width:header.column.getSize(),
                }}>
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
    </>
  )
}
export default TicketData