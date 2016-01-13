import React from 'react';

let sizes = ['xs', 'sm', 'md', 'lg'];

let Col = (props) => {
  let classes = props.className && props.className.split(' ') || [];
  let newProps;
  
  sizes.forEach((size) => {
    if (props[size] > 0) {
      classes.push('col-' + size + '-' + props[size]);
    }

    if (props[size + 'Offset'] > 0) {
      classes.push('col-' + size + '-offset-' + props[size]);
    }

    if (props[size + 'Push'] > 0) {
      classes.push('col-' + size + '-push-' + props[size]);
    }

    if (props[size + 'Pull'] > 0) {
      classes.push('col-' + size + '-pull-' + props[size]);
    }
  });

  newProps = Object.assign({}, props, {
    className: classes.join(' ')
  });
  
  return (
    <div {...newProps}>{props.children}</div>
  )
}

export default Col;
