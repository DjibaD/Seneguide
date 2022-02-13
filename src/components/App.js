import Form from './form'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './About'
import Navvbar from './Navvbar';
import Home from './Home';
import '../App.css'


function App() {
  return (
    <Router>
    <div>
      <Navvbar/>


      <switch>
        <Route exact path="/"exact component={Home}/>
         <Route path ="/about" exact component={About}/>
         <Route path ="/create" exact render={()=><Form/>}/>

         </switch>
    </div>
    </Router>
  );
}

export default App;