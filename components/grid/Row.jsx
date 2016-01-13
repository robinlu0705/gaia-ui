import React from 'react';

let Row = (props) => {
  let classes = props.className && props.className.split(' ') || [];
  let newProps;

  classes.push('row');
  newProps = Object.assign({}, props, {
    className: classes.join(' ')
  });
  
  return (
    <div {...newProps}>{props.children}</div>
  )
}

export default Row;
