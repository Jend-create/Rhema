import React from 'react'
import useStyles from '../styles';
import useLocalStorage from './localStorage'
import { Container, AppBar, Typography } from '@material-ui/core';

function Learner() {
  const [name, setName] = useLocalStorage('name', '')
  const handleName = (e)=> {
        setName(e.target.value)
        console.log(name)};
  
  const classes = useStyles();
  const handleSubmit = (e) =>{
    e.preventDefault() }
    return (
    <div >
    <section>
    <Container maxWidth="lg"> 
    <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h5" align="center"> 
    Hi, new here. Signup as a learner, to access our range of services!</Typography>
    </AppBar>
    </Container> 
    <br/><br/>
    <form className='section-center' onSubmit={handleSubmit}>
    <h3>Signup Form</h3>
    <label> Learner Profile (Full Name):</label><br/>
    <input type="text" value={name} onChange={handleName}/><br></br>
    <label> Email:</label><br/>
    <input type="email"/><br/>
    <label> Password:</label><br/>
    <input type="password"/><br/><br/>
    <button className='button'><a href={'/'}>Submit</a></button>
    </form>
    </section>
    </div>
    )};

export default Learner
