import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className="nav-container">
                <nav className="Mac's-container">
                    <nav className="nav-left"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><Link to="/dashboardpage"><i class="fa fa-home"></i></Link></nav>
                    <h1>Mac's</h1>
                    <nav className="nav-right">
                        <Link to="/" className="Logout_Link" >Logout</Link>
                    </nav>
                </nav>
        </div>
    );
}

export default Nav;