import React from 'react';

import {Link, NavLink} from 'react-router-dom';

const Nav = () =>{
    return(
        <div>
            <a href='#'>Logo</a>
            <ul>
                <NavLink  exact to="/">Home</NavLink>
                <NavLink activeClassName='selected' to="/about">About</NavLink>
                <NavLink  to="/json">Json</NavLink>
                <NavLink to="/OutputconditionCore">OutputconditionCore</NavLink>
            </ul>
        </div>
    )
}

export default Nav;