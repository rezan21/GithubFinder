import React, { Fragment } from 'react';
import spiner from './spinner.gif';
const Spinner = () => (
  <Fragment>
    <img
      src={spiner}
      alt='Loading...'
      style={{ display: 'block', width: '500px', margin: 'auto' }}
    />
  </Fragment>
);

export default Spinner;
