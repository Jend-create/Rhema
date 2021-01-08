import React , { useState, useEffect }from 'react'
import useStyles from '../styles';
import { Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUserDetails } from '../actions/userRoute';


const Facilitator = ({ currentId, setCurrentId }) => {
  const [userData, setUserData] = useState({ profile: '', email: '', password: '' });
  const user = useSelector((state) => (currentId ? state.User.save(() => user.id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
 
  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const clear = () => {
    setCurrentId(0);
    setUserData({ profile: '', email: '', password: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createUser(userData));
      clear();
    } else {
      dispatch(updateUserDetails(currentId, userData));
      clear();
    }
  };

  return (
    <div>
    <Container maxWidth="lg"> 
    <AppBar className={classes.appBar} position="static" color="inherit">
    <Typography className={classes.heading} variant="h5" align="center"> 
    Hello! Interested in contributing to this community? Please Register here!</Typography>
    </AppBar>
    </Container> 
    <br/><br/>
    <form className="section-center" onSubmit={handleSubmit}>
    <h3>Registration Form</h3>
    <label> Facilitator Profile:</label><br/>
    <input type="text" name="profile" label="profile" value={userData.profile} onChange={(e) => setUserData({ ...userData, profile: e.target.value })} /><br></br>
    <label> Email:</label><br/>
    <input type="email" name="email" label="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/><br/>
    <label> Password:</label><br/>
    <input type="password" name="password" label="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })}/><br/><br/>
    <button className = 'button' type='submit' onSubmit={clear}>
    <a href={'/contactFacilitator'}>Register</a></button>
    </form>
    </div>    
    )};

export default Facilitator