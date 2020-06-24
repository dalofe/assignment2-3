import React from 'react';

const validationComponent = ( props ) => {
  let minLength = 5;
  let result = 'The string is too short';
  if( props.length > minLength ) {
    result = 'The string is long enough'
  }

  return (
    <p>{result}</p>
  )
};

export default validationComponent;