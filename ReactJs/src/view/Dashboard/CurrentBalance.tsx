import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../common/Title';
import { initialBalance } from '.';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    fontSize: 12,
    paddingTop:10
  },
});

interface CurrentBalanceProps {
  currentBalance: initialBalance
}
export default function CurrentBalance({ currentBalance: { balance, date } }: CurrentBalanceProps) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4">
      ₹ {balance}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date}
      </Typography>
    </React.Fragment>
  );
}
