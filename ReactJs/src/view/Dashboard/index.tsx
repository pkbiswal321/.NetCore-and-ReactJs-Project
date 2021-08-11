import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Layout from '../../Layout';
import { Container } from '@material-ui/core';
import Transaction from './Transaction';
import Balance from './CurrentBalance';
import { RouteComponentProps } from 'react-router-dom';
import { useLoading } from '../../provider/LoadingProvider';
import { GetAllTransaction, GetBalance } from '../../service/TransactionService';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    container: {
      // paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 250,
    },
  });

export interface DashboardProps extends WithStyles<typeof styles>, RouteComponentProps { }

export interface initialBalance {
  balance: number,
  date: string
}

export interface initialTransaction {
  id: number,
  date: string,
  type: number,
  balance: number,
}

function Dashboard(props: DashboardProps) {
  const { classes } = props;
  const { startLoading, stopLoading } = useLoading()
  const [currentBalance, setCurrentBalance] = useState<initialBalance>({
    balance: 0,
    date: ""
  })

  const [allTransaction, setAllTransaction] = useState<initialTransaction[]>([])

  useEffect(() => {
    _getBalance()
    _getAllTransactions()
  }, [])

  const _getBalance = async () => {
    startLoading()
    try {
      const response = await GetBalance()
      if (response.status == 200) {
        console.log(response)
        setCurrentBalance(response.data)
        stopLoading()
      } else {
        stopLoading()
      }
    } catch (error) {
      stopLoading()
    }
  }

  const _getAllTransactions = async () => {
    startLoading()
    try {
      const response = await GetAllTransaction()
      if (response.status == 200) {
        console.log(response)
        setAllTransaction(response.data)
        stopLoading()
      } else {
        stopLoading()
      }
    } catch (error) {
      stopLoading()
    }
  }

  return (
    <Layout>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={12}>
            <Paper className={clsx(classes.paper)}>
              <Balance currentBalance={currentBalance} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={12}>
            <Paper className={clsx(classes.paper, classes.fixedHeight)}>
              <Transaction allTransaction={allTransaction} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default withStyles(styles)(Dashboard);
