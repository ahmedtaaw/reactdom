import React, { Component } from 'react';

import Child from './child';

import ChildStateless from './child-stateless';

class App extends Component {
    state={
        name:"hamza",
        age:35,
        color:"intial"
    }
    handleClick = () => {
        console.log(this.state.name)
    }
    handleMouse(){
        console.log("mouse")
    }

    changeStage = ()=>{
        this.setState({
            name:"ahmed tawfik",
            age:32,
            color:"red"
        })
    }

    render() {
        return ( 
        <div className = "App" >
            <Child / >

            <button onClick={this.handleClick}>handle click</button>
            <button onMouseMove={this.handleMouse}>MouseMove</button> 
            <p></p>
            <p style={{color:this.state.color}}>state is: name {this.state.name} and age is {this.state.age}</p>
            <button onClick={this.changeStage}>change state</button>

            <div>
            <ChildStateless/>
            </div>

        </div>
        )

    }
}

export default App;
