import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useTable, usePagination } from 'react-table';

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;


const TableComponent = props => {

  function Table({ columns, data }) {

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 2 },
        },
        usePagination
      )
    
      // Render the UI for your table
      return (
        <>
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
              {page.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          {/* 
            Pagination can be built however you'd like. 
            This is just a very basic UI implementation:
          */}
          <div className="pagination">
            <button onClick={() => props.NextList({ page: pageIndex + 1, limit: 10, order: 'created', orderMethod: 'DESC' })} disabled={!canPreviousPage}>
              {'<'}
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {'>'}
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </>
      )
    };
    const columns = React.useMemo(
        () => [
          
              {
                Header: 'First Name',
                accessor: 'customer_first_name',
              },
              {
                Header: 'Personnel Name',
                accessor: 'personnel_first_name',
              },
              {
                Header: 'Date assigned',
                accessor: 'assigned',
              },
              {
                Header: 'comments',
                accessor: 'comments',
              },
              {
                Header: 'registration',
                accessor: 'registration',
              }
        ],
        []
      );

      const [dataSource, setDataSource] = useState([]);

      useEffect(() => {
         // const dataSource = props.tasks && props.tasks.data && props.tasks.data.message && props.tasks.data.message.tasks;
        const data = props.tasks && props.tasks.data && props.tasks.data.tasks;
        if(data) {
          setDataSource(data);
        }
      }, [props.tasks && props.tasks.data && props.tasks.data.tasks]);

      return(
        <Styles>
            <Table columns={columns} data={dataSource} />
      </Styles>
      );
  }

  export default TableComponent;
  