import React, { Component } from 'react';
//import Formsapp from './components/forms';
import Outputcondition from './components/outputcondition'
class App extends Component {
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
    return (
      <div className="App">
        <Outputcondition items={this.state.items}/>
      </div>
    )
  }
}

export default App;
