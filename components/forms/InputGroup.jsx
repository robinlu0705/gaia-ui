import {} from './InputGroup.less';
import React from 'react';

var InputGroup = (props) => {
  let classes = ['Gaia-forms-InputGroup'].concat(props.className ? props.className.split(' ') : []);
  let newProps = Object.assign({}, props, {
    className: classes.join(' ')
  });

  return (
    <div {...newProps}>{props.children}</div>
  );
};

export default InputGroup;
