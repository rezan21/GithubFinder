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
    if (this.state.text.trim() === '') {
      this.setState({ text: '' });
      this.props.showAlert('Please Enter Something!', 'light');
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });
    }
  };
  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
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
  }
}
Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  clearUsers: PropTypes.func.isRequired
};
export default Search;
