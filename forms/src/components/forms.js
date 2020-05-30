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
    handleSubmit = (e)=>{
        e.preventDefault()
        this.setState({
            name:"submitted"
        })
    }
    handleSelect = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Forms</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button value="submit">submit</button>
                    <select onChange={this.handleSelect} >
                        <option value="option 1">option 1 </option>
                        <option value="option 2">option 2</option>
                        <option value="option 3">option 3 </option>
                    </select>
                    <h2>{this.state.name}</h2>
                </form>
            </div>
        )
    }
}

export default Formsapp