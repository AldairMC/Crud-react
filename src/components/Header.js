import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="col-md-12 text-center mb-5"> 
            <Link to='/'><h1>CRUD REACT</h1></Link>
        </div>
    );
};

export default Header;