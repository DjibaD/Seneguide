import React, {useState, useEffect} from "react"
import Body from './body';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About'
import Navvbar from './Navvbar';
import Home from './Home';


function App() {
  return (
    <Router>
    <div>
      <Navvbar/>


      <switch>
        <Route exact path="/"exact component={Home}/>
         <Route path ="/about" exact component={About}/>
         </switch>
    </div>
    </Router>
  );
}

export default App;