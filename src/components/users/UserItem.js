import React from 'react';
import PropTypes from 'prop-types';

// destructure: user from props and then avatar_url, ... etc from prop.user
const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        style={{ width: '60px' }}
        className='round-img'
        src={avatar_url}
        alt='avatar'
      />
      <h3>{login}</h3>
      <a href={html_url} className='btn btn-dark btn-sm my-1'>
        More
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
