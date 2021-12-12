import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div>
        
            <Link to={`/home`}>home</Link>
            <br />
        
            <Link to={`/about`}>About</Link>
            <br />
            <Link to={`/contact`}>contact</Link><br />
            <Link to={`/works`}>Works</Link>
            <br />
            <Link to={`/resume`}>resume</Link>

        </div>
    );
};

export default Menu;