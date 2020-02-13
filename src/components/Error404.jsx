import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props){
  let errorMessages = {
    backgroundColor:'yellow',
    padding:'20px',
    textAlign:'center',
    fontFamily: 'fantasy',
    fontSize:'30px',

  }
  return (
    <div style={errorMessages}>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
