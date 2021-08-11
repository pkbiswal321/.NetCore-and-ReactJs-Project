import React,{ ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';

interface TitleProps{
    [x: string]: ReactNode;
}

export default function Title(props:TitleProps) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

