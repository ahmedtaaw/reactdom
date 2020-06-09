import React, { Component } from 'react';
//import Formsapp from './components/forms';
import Outputcondition from './components/Outputcondition';

import "./components/components.css"

import Nav from './components/Nav'
import Home from './components/Home';
import About from './components/About';
 
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component {

  /*component life cycle
  1-constructor
  2-render
  3-componentDidMount
  4-componentDidUpdate
  */

  constructor (){
    super();
    console.log("constructor")
  }

  componentDidMount(){
    console.log("componentDidMount every thing has been rendered")
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate")
    console.log("prevProps",prevProps)
    console.log("prevState",prevState)
  }

  handleADD = (e)=>{
    let items = this.state.items;
    items.push(  {id:9, name:"sawsan", age:"132" })
    this.setState({
      items:items
    })
  }

  handleDelete = (e)=>{
    let items = this.state.items;
    items.pop()
    this.setState({
      items:items
    })
  }

  state={
    items:[
      {id:1, name:"ahmed", age:"33" },
      {id:2, name:"amohahmed", age:"22" },
      {id:3, name:"aya", age:"42" },
      {id:4, name:"mona", age:"12" },
      {id:5, name:"monira", age:"33" },
      {id:6, name:"shafik", age:"22" },
      {id:7, name:"tawfik", age:"79" },
      {id:8, name:"ema", age:"12" }
    ]
  }
  render() {
    console.log("render")
    return (
      <BrowserRouter>
      <div className="App">
        <Nav/>
        <Outputcondition items={this.state.items}/>
        <button onClick={this.handleADD}>ADD</button>
        <button onClick={this.handleDelete}>Delete</button>

        <Route exact path="/" component = {Home}/>
        <Route path="/about" component = {About}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
