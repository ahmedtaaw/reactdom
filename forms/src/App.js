import React, { Component } from 'react';
//import Formsapp from './components/forms';


import "./components/components.css"

import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
import JsonBlog from './components/JsonBlog';
import Routex from './components/Routex';
import OutputconditionCore from './components/OutputconditionCore';
import tableFragmant from './components/tableFragmant';
 
import { BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {


  render() {
    //console.log("render")
    return (
      <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route path="/about" component = {About}/>
          <Route path="/json" component = {JsonBlog}/>
          <Route path="/OutputconditionCore" component ={OutputconditionCore}/>
          <Route path="/tableFragmant" component={tableFragmant}/>
          <Route path="/:test_params" component={Routex}/>
        </Switch>
 




        
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
