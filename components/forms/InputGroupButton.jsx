import {} from './InputGroupButton.less';
import React from 'react';

let InputGroupButton = (props) => {
  let { skin, className } = props;
  let classes = ['Gaia-forms-InputGroupButton']
    .concat(skin ? `skin-${skin}` : [])
    .concat(className ? className.split(' ') : []);
    
  let newProps = Object.assign({}, props, {
    type: 'button',
    className: classes.join(' ')
  });

  return (
    <button {...newProps}>{props.children}</button>
  );
};

export default InputGroupButton;
