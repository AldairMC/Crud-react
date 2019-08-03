import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <Link to={'/'}>All posts</Link>
            <Link to={'/new'}>New Posts</Link>
        </nav>
    );
};

export default Nav;