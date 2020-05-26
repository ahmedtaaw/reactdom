import React, {Component} from 'react';

import Items from './components/items'

class App extends Component {

  state={
    items:[
      {id:1, name:"ahmed", age:"33" },
      {id:2, name:"amohahmed", age:"22" },
      {id:3, name:"aya", age:"42" },
      {id:4, name:"mona", age:"12" }
    ]
  }


  render(){
    return (
      <div className="App">
        <Items items={this.state.items}/>
      </div>
    );
  }
}

export default App;
