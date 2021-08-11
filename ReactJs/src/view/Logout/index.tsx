import { Button, Card, CardHeader, Grid, Box } from '@material-ui/core'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Layout from '../../Layout'
import { useAuth } from '../../provider/AuthProvider'

export interface LogoutProps extends RouteComponentProps { }

function Profile({ history }: LogoutProps) {
  const { logedOut, isAuthState } = useAuth()

  const _logOut = () => {
    logedOut()
    history.push('/')
  }
  return (
    <Layout>
      <Grid container>
        <Grid item md={4}></Grid>
        <Grid item md={4}>
          <Card>
            <Box display="flex" justifyContent="center" p={5}>
              <Button variant="contained" color="primary" onClick={() => _logOut()}>Logout</Button>
            </Box>
          </Card>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </Layout>
  )
}

export default Profile;