import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { usePagination, useTable } from "react-table";
import { TableContainer } from "@mui/material";

interface ITableProps {
  columns: any;
  data: any[];
}
const Table: React.FC<ITableProps> = ({ columns, data }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, prepareRow, rows } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <TableContainer>
      <MuiTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup, index) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              key={`table-row-${index}`}
            >
              {headerGroup.headers.map((column, index) => (
                <TableCell
                  {...column.getHeaderProps()}
                  key={`table-header-${index}`}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={`table-body-row-${i}`}>
                {row.cells.map((cell, key) => {
                  return (
                    <TableCell
                      {...cell.getCellProps()}
                      key={`table-body-cell-${key}`}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
