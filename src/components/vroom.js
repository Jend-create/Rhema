import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import Rheema from '../images/Rheema.png';
import VideoChat from './VideoChat';
import useStyles from '../styles';

function Vroom() {
  const classes = useStyles();
  return (
        <div>
        <div>
        <Container maxWidth="lg"> 
        <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={Rheema} alt="icon" height="45" />
        <Typography>Welcome to Rhema Virtual Room </Typography>
        </AppBar>
        </Container> 
        </div> 
        <div className='app'>
       <main>
        <VideoChat />
        <br></br>
      </main>
      </div>    
        </div> 
);
}
export default Vroom;
