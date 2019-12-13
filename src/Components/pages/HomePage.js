import React from 'react';
import {Link} from 'react-router-dom';



function HomePage() {
    return (
      <div className="homepage">
        <nav>
          <div class="nav-left-home">
          <Link to="/" id="homelink"><h1>Home</h1></Link>
          
          </div>
          <div class="nav-right">
            <Link to="/login"><h2>Login</h2></Link>
            <Link to="/signup"><h2>SignUp</h2></Link>
            
          </div>
        </nav>
        <main>
          <div className="center-div">
            
            <p>Welcome to our store</p>
          </div>
        </main>
      </div>
    );
}
export default HomePage;