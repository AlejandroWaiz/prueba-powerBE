import * as React from 'react'
import ReactDOM from 'react-dom/client'

import '../css/table.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

type ConvertionTransaction = {
  UserName: string
  Email: string
  MoneyToConvert: number
}

type ConvertionPayload = {
    UserName: string
    Email: string
    MoneyToConvert: number
    ConvertedMoney: number
    CurrentValueOfUF: number
    Date: string
}

const columnHelper = createColumnHelper<ConvertionPayload>()

const columns = [
  columnHelper.accessor('UserName', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('Email', {
    id: 'email',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('MoneyToConvert', {
    header: () => 'To convert (UF)',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('ConvertedMoney', {
    header: () => 'Converted ($)',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('CurrentValueOfUF', {
    header: 'UF value of transaction',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('Date', {
    header: 'Date',
    footer: info => info.column.id,
  }),
]

export default function TableDisplayer() {

  const [data, setData] = React.useState([])
  const rerender = React.useReducer(() => ({}), {})[1]


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  )
  
}

