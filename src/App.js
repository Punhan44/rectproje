import React from 'react';
import { BrowserRouter as Router ,Switch,Route} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Blog from './pages/Blog';

import Home from './pages/Home';
import Shop from './pages/Shop';



import Contact from './pages/Contact';




const App=()=> {

  return (
   
  <>
 <Router>
 
 <Switch>
   <Route path='/' exact component={Home} />
  
   <Route path="/shop" component={Shop}/>
   <Route path='/blog' component={Blog}/>

  
   <Route path='/contact' component={Contact}/>

 </Switch>
 </Router>

  </>
  
  );
}

export default App;


