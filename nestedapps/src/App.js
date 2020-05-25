import React, { Component } from 'react';

import Child from './child';

class App extends Component {
    handleClick(){
        console.log("clicked")
    }
    handleMouse(){
        console.log("mouse")
    }
    render() {
        return ( 
        <div className = "App" >
            <Child / >

            <button onClick={this.handleClick}>handle click</button>
            <button onMouseMove={this.handleMouse}>MouseMove</button>
        </div>
        )

    }
}

export default App;
