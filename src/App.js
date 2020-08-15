import React from 'react';
import './App.css';

import Email from './components/Email';
import Projects from './components/Projects';
import About from './About';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home';


function App() {




  return (


<Router>
<Navbar/>
  <Switch>
    <Route exact path='/'><Home/> </Route>
    <Route exact path='/about'><About/> </Route>
    <Route exact path='/projects'><Projects/> </Route>
    <Route exact path='/contact'><Email/> </Route>
  </Switch>
</Router>






   
  );
}

export default App;
