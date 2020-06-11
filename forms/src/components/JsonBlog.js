import React, {component, Component} from 'react';

import axios from 'axios';

class JsonBlog extends Component{

    state={
        users:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
this.setState({
    users:res.data
})
        })
    }
    render(){
        const {users}=this.state;
        const userList = users.map(user=>{
            return(
                <div key={user.id}>
                    <p>Name: {user.name}, 
                    Email: {user.email}, 
                    which lives in: {user.address.city}</p>
                    <hr></hr>
                </div>
            )
        })
        return(
            <div>
                {userList}
            </div>
        )
    }
}

export default JsonBlog