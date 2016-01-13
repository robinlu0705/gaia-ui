import {} from './IconText.less';
import React from 'react';

let IconText = (props) => {
  let classes = props.className && props.className.split(' ') || [];
  let newProps;

  classes.push('Gaia-icons-IconText');
  newProps = Object.assign({}, props, {
    className: classes.join(' ')
  });

  return (
    <span {...newProps}>{props.children}</span>
  )
}

export default IconText;
