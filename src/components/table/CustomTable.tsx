"use client"

import { useEffect, useState } from 'react';

import Cookies from "js-cookie";
import { fetchClientsPerPage, fetchEmployeesPerPage } from '@/services/requsts';
import { useParams, usePathname } from 'next/navigation';
import { Column } from '@/utils/interfaces';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


interface Data {
  id: bigint,
  name: string,
  cpf: string,
  adress: string,
  age: number
};


interface CustomTableProps {
  columns: Column[]
}


export default function CustomTable({ columns }: CustomTableProps) {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [rows, setRows] = useState<Data[]>([]); // verificar possivel inconsistencia no id de rows devido a tipagem ser para clientes
  const [totalCount, setTotalCount] = useState<number>(0);

  const pathname = usePathname();
  const group = pathname.split("/")[2];



  useEffect(() => {
    async function fetchData() {
      const token = Cookies.get("token");

      if (group && token && typeof group === "string") {
        try {
          let data;
          if(group === "clientes") {
            data = await fetchClientsPerPage(page, rowsPerPage, token);
          }
          else if(group === "funcionarios") {
            data = await fetchEmployeesPerPage(page, rowsPerPage, token);
          }
          setRows(data.contentPage);
          setTotalCount(data.totalElements);
        } catch (error) {
          console.error("Erro ao buscar os dados:", error);
        }
      }
    };

    fetchData();
  }, [page, rowsPerPage]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '70%', overflow: 'hidden', margin: "2rem", maxHeight: 600 }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id as keyof Data];
                      return (
                        <TableCell key={column.id}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}