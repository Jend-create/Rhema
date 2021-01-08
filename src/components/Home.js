import React from 'react';

const Home = () => {

	return (
  	<div>
    <form className="section-center">
    <h4> Login Your Details!</h4>     
    <label> Email:</label><br/>
    <input type="email"/><br></br>
    <label>Password:</label><br/>
    <input type="password"/><br/><br/>
    <button className = 'button' color='primary'>
    <a href={"/vroom"}>Login</a></button>
    </form>
    <form className="section-centre">
    <h3>Welcome to Rhema Learners' App !</h3>
    <br></br>
    <p>Contact us: P. O. Box 45 KN Accra</p>
    <p>Tel: +2335529021330/ 03022794483</p>
    <p>Contact us: P. O. Box 45 KN Accra</p>
    <h4>Our Services Include:</h4>  
    <p>1. Virtual Learning</p>
    <p>2. One-on-One Tuition</p>
    <p>3. Library...</p>
    </form>
    </div>     )
     };

export default Home;