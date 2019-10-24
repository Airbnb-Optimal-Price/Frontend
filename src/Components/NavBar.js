import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <header>
      <nav>
        <h1 className="logo">Airbnb Optimal Price</h1>
      <ul>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Sing up</Link>
          </li>
        </ul>
      </nav>
    </header>
   );
}
 
export default Navbar;