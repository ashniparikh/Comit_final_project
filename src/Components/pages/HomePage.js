import React from 'react';
import {Link} from 'react-router-dom';



function HomePage() {
    return (
        <nav>
          <div class="nav-left-home">
            <a  href="#"><h1>Home</h1></a>
          </div>
          <div class="nav-right">
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            
          </div>
        </nav>
    );
}
export default HomePage;