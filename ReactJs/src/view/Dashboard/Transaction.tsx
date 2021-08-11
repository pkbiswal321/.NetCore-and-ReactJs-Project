import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../common/Title';
import { Paper, TableContainer } from '@material-ui/core';
import { initialTransaction } from '.';

// Generate Order Data
function createData(id: number, date: string, type: string, amount: number) {
  return { id, date, type, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Deposit', 312.44),
  createData(1, '16 Mar, 2019', 'Deposit', 866.99),
  createData(2, '16 Mar, 2019', 'Withdraw', 100.81),
  createData(3, '16 Mar, 2019', 'Deposit', 654.39),
  createData(4, '15 Mar, 2019', 'Deposit', 212.79),
];


const useStyles = makeStyles((theme) => ({

}));

interface TransactionProps {
  allTransaction: Array<initialTransaction> | [];
}

export default function Transaction({ allTransaction }: TransactionProps) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allTransaction.length > 0 && allTransaction.map((row: initialTransaction) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.type == 0 ? "Deposit" : "Withdraw"}</TableCell>
              <TableCell>₹ {row.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}