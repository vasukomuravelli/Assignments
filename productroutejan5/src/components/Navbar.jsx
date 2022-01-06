import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div style={{display : 'flex', justifyContent: 'space-around'}}>
            <Link to='/home'>Home</Link>
            <Link to='/products'>All products</Link>
        </div>
    )
}