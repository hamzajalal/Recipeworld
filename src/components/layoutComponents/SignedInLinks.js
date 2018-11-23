import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li> <NavLink to='/create'>New Recipe</NavLink> </li>
            <li> <NavLink to='/'>Log Out</NavLink> </li>
            <li> <NavLink to='/' className='btn btn-floating #f9a825 yellow darken-3'>JH</NavLink> </li>
        </ul>
    )
}

export default SignedInLinks;