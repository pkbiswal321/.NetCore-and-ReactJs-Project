import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Theme,
  MenuItem
} from '@material-ui/core';
import Layout from '../../Layout';
import { DepositWithdrawAmount } from '../../service/TransactionService';
import { useLoading } from '../../provider/LoadingProvider';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  "MuiCardHeader-title": {
    color: '#006db3',
  },
  "MuiDivider-root": {
    height: 0.1,
    backgroundColor: '#d9dadc'
  }
}));

function Deposit() {

  const classes = useStyles();
  const [values, setValues] = useState({
    balance: 0,
    type: 0,
  });
  const { startLoading, stopLoading } = useLoading()

  const handleChange = (event: any) => {
    console.log(event.target.value)
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const _depositWithValidation = () => {
    console.log(values)
    if (values.balance <= 0) {
      alert('Please enter amount')
    } else if (values.type != 0 && values.type != 1) {
      alert('Please enter valid type')
    } else {
      _depositWithdraw()
    }
  }

  const _depositWithdraw = async () => {
    startLoading()
    try {
      const response = await DepositWithdrawAmount(values)
      if (response.status == 200) {
        setValues({ balance: 0, type: 0 })
        stopLoading()
      } else {
        alert(response.data)
        stopLoading()
        setValues({ balance: 0, type: 0 })
      }
    } catch (error) {
      stopLoading()
    }
  }

  return (
    <Layout>
      <form
        autoComplete="off"
        noValidate
        className={clsx(classes.root)}
      >
        <Card>
          <CardHeader
            className={classes['MuiCardHeader-title']}
            subheader="Insert correct information"
            title="Deposit & Withdraw"
          />
          <Divider className={classes['MuiDivider-root']} />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Amount"
                  name="balance"
                  onChange={handleChange}
                  required
                  value={values.balance}
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Type"
                  name="type"
                  onChange={handleChange}
                  required
                  value={values.type}
                  variant="outlined"
                  type="number"
                  id="select"
                  select
                >
                  <MenuItem value="0">Deposit</MenuItem>
                  <MenuItem value="1">Withdraw</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Box
            display="flex"
            justifyContent="flex-end"
            p={2}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={() => _depositWithValidation()}
            >
              Submit
          </Button>
          </Box>
        </Card>
      </form>
    </Layout>
  );
}

export default Deposit
