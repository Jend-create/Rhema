import React, { useState, useEffect } from 'react';
import { Container, Grid, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import useStyles from '../styles';
import { getPosts } from '../actions/posts';

const Contact = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());}, [currentId, dispatch]);

  return (
    <div className='contact'>
    <div> 
    <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h5" align="center"> 
    Welcome! You can frequently update your profile as a Facilitator for
    Learners to spot and know more about you.</Typography>
    </AppBar>
    </div>
    <Container maxWidth="lg"> 
    <br></br> <Container>
    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
    <Grid item xs={12} sm={7}>
    <Posts setCurrentId={setCurrentId} />
    </Grid>
    <Grid item xs={12} sm={4}>
    <Form currentId={currentId} setCurrentId={setCurrentId} />
    </Grid>
    </Grid>
    </Container>
    </Container>
    </div>
     );
};

export default Contact;
