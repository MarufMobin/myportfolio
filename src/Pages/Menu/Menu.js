import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <div className="main-manu">

            <div className='inner-main-manu'>
                <Link className="custm-rout" to={`/home`}>home</Link>
                <br />

                <Link className="custm-rout" to={`/about`}>About</Link>
                <br />
                <Link className="custm-rout" to={`/contact`}>contact</Link><br />
                <Link className="custm-rout" to={`/works`}>Works</Link>
                <br />
                <Link className="custm-rout" to={`/resume`}>resume</Link>
            </div>

        </div>
    );
};

export default Menu;