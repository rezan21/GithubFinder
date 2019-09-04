import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ clearUsers, showClear, searchUser, showAlert }) => {
  const [text, setText] = useState('');

  const onChange = e => {
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (text.trim() === '') {
      setText('');
      showAlert('Please Enter Something!', 'light');
    } else {
      searchUser(text);
      setText('');
    }
  };

  return (
    <div>
      <form
        className='form'
        style={{ display: 'grid', gridTemplateColumns: '7fr 1fr' }}
        onSubmit={onSubmit}
      >
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <input
          type='submit'
          value='Clear'
          className='btn btn-light btn-block'
          style={{ marginTop: '-10px' }}
          onClick={clearUsers}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  clearUsers: PropTypes.func.isRequired
};
export default Search;
