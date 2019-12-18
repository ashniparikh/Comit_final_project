import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className="nav-container">
                <nav id="macs-container">
                    <h1 id="mactext">Mac's</h1>
                
                        <Link to="/" className="Logout_Link" ><h2 clasName="logout">Logout</h2></Link>
                
                </nav>
        </div>
    );
}

export default Nav;