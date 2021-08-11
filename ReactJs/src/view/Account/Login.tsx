import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { LoginUser } from '../../service/UserService'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { useLoading } from '../../provider/LoadingProvider'
import { setUserToken } from '../../utils/Helper'
import { useAuth } from '../../provider/AuthProvider'

interface Props extends RouteComponentProps { }
//new changes

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Login({ history }: Props) {
  const classes = useStyles()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { startLoading, stopLoading } = useLoading()
  const { logedIn, isAuthState } = useAuth()

  // if (isAuthState.userToken) {
  //   history.push('/dashboard')
  // }

  // useEffect(() => {
  //   if (isAuthState.userToken) {
  //     console.log(isAuthState.userToken)
  //     history.push('/dashboard')
  //   }
  // }, [isAuthState.userToken])



  const onInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const _loginValidation = () => {
    var emailvalid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!user.email.match(emailvalid)) {
      alert("Please enter a valid email address")
    } else if (user.password == "") {
      alert("Please enter password")
    } else {
      _loginUser()
    }
  }

  const _loginUser = async () => {
    try {
      startLoading()
      const response = await LoginUser(user);
      if (response.status === 200) {
        logedIn(response.data.token)
        setUserToken(response.data.token);
        stopLoading()
        history.push('/dashboard')
        console.log(response);
      } else {
        stopLoading()
      }
    } catch (error) {
      stopLoading()
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => onInputChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => onInputChange(e)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => _loginValidation()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
