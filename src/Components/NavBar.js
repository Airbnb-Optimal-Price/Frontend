import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <header>
      <nav>
        <h1 className="logo"><Link to="/">Airbnb Optimal Price</Link></h1>
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
   );
}
 
export default Navbar;