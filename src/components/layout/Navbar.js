import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <Link to='/'>
        {' '}
        <h1>
          <i className={icon}></i>
          {title}
        </h1>
      </Link>

      <ul className=''>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  icon: 'fab fa-github',
  title: 'Github Finder'
};
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar;
