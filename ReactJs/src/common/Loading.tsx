import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialBackdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLoading } from '.././provider/LoadingProvider';
import logo from '../assets/loder.gif'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#333',
    },
}));

const Loading = () => {
    const classes = useStyles();
    const { loadingState } = useLoading();
    console.log(loadingState)
    return (
        <MaterialBackdrop className={classes.backdrop} open={loadingState.isLoading}>
            <img src={logo} className="fp-loader" alt="loading" />
            {/* <CircularProgress /> */}
        </MaterialBackdrop>
    );
}

export default Loading
