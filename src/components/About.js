import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-dom'
import Navbar from './Navbar';
import Home from './Home';
import Facilitator from './facilitator';
import Learner from './learner';
import Contact from './contactFacilitator';
import Vroom from './vroom'


function About() {
  return (
      <Router history={browserHistory}>
      <Navbar/> 
      <Switch>
      <Route exact path='/' component={Home}/>  
      <Route path='/contactFacilitator' component={Contact}/>
      <Route path='/facilitator' component={Facilitator}/>
      <Route path='/learner' component={Learner}/>   
      <Route path='/vroom' component={Vroom}/>            
      </Switch> 
      </Router>
    )
};
export default About;