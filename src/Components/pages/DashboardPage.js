import React from 'react';
import { Link } from 'react-router-dom';




function DashboardPage(props) {
    return (
        <div className="dashboard-container">
            <div className="nav-container">
                <nav className="Mac's-container">
                    <h1>Mac's</h1>
                    <nav className="nav-right">
                        <Link to="/" className="Logout_Link">Logout</Link>
                    </nav>
                </nav>
            </div>
            <div className="welcome">
                <h1>Welcome {props.username}</h1>
            </div>

        </div>
    );
}
export default DashboardPage;