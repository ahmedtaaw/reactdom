import React, { Component } from 'react';

import Child from './child';

class App extends Component {
    state={
        name:"hamza"
    }
    handleClick = () => {
        console.log(this.state.name)
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
