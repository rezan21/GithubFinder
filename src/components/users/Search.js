import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <form
        className='form'
        style={{ display: 'grid', gridTemplateColumns: '7fr 1fr' }}
        onSubmit={this.onSubmit}
      >
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
    );
  }
}
Search.propTypes = {
  searchUser: PropTypes.func.isRequired
};
export default Search;
