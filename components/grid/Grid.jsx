import {} from './Grid.less';
import React from 'react';

export var Grid = (props) => {
  let classes = props.className && props.className.split(' ') || [];
  let newProps;

  classes.push(props.fluid && 'container-fluid' || 'container');
  newProps = Object.assign({}, props, {
    className: classes.join(' ')
  });

  return (
    <div {...newProps}>{props.children}</div>
  )
}

export Col from './Col';
export Row from './Row';
