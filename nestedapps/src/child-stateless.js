import React, { Component } from 'react';

//it's better to use function based than class based in stateless component
const ChildStateless = (props)=>{
    
        return(
            <p>
                Stateless Component and data passed is {props.test}
            </p>
        )
    
}

export default ChildStateless;