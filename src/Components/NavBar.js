import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to='/'>
          <img className='logo' src={logo} alt='logo' />
        </Link>
        <ul>
          <li>
            <a href='#DATA-DRIVEN'>How It Works</a>
          </li>
          <li className='login'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='register'>
            <Link to='/registration'>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
