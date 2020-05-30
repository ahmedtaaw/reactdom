import React, { Component } from 'react';

class Formsapp extends Component{

    state = {
        name:''
    }

    handleChange = (e)=>{
        this.setState({
            name:e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Forms</h1>
                <form>
                    <input type="text" onChange={this.handleChange}></input>
                    <button>submit</button>
                    <h2>{this.state.name}</h2>
                </form>
            </div>
        )
    }
}

export default Formsapp