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
        return(
            <div>
{this.state.users.map(user=>(
<p>{user.name} and email is <a href={'mailto:'+user.email}>{user.email}</a></p>

    ))}
            </div>
        )
    }
}

export default JsonBlog