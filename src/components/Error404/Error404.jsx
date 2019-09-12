import React from 'react';

const Error404 = props => {
  setTimeout(() => {
    props.history.push('/')
  }, 2000);
  return (
  <div>
    Error 404
  </div>
  )
};

export default Error404;