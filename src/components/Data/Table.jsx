import React from "react"
import { useTable } from 'react-table';


export default function Table(){
    const [dataArray, setDataArray] = React.useState([]);
    const columns = React.useMemo(() => [
        { Header: 'Contributor', accessor: 'contributor' }, 
        { Header: 'Amount', accessor: 'amount' },
        { Header: 'Memo', accessor: 'memeo'}
      ], []);


      const tableInstance = useTable({ columns, data });

      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
    
      return (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )
}