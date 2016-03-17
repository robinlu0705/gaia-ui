import {} from './InputGroupLabel.less';
import React from 'react';

let InputGroupLabel = (props) => {
  let classes = ['Gaia-forms-InputGroupLabel'].concat(props.className ? props.className.split(' ') : []);
  let newProps = Object.assign({}, props, {
    className: classes.join(' ')
  });

  return (
    <div {...newProps}>{props.children}</div>
  );
};

export default InputGroupLabel;