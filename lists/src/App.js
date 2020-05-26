import React, {Component} from 'react';

import Items from './components/items'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Items id="1" name="mohamed" age="33"/>
      </div>
    );
  }
}

export default App;
