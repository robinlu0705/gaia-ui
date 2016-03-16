import React from 'react';

let sizes = ['xs', 'sm', 'md', 'lg'];

let Col = (props) => {
  let classes = props.className && props.className.split(' ') || [];
  let newProps;
  
  sizes.forEach((size) => {
    if (props[size] > 0) {
      classes.push('col-' + size + '-' + props[size]);
    }

    let offset = size + 'Offset';
    if (props[offset] > 0) {
      classes.push('col-' + size + '-offset-' + props[offset]);
    }

    let push = size + 'Push';
    if (props[push] > 0) {
      classes.push('col-' + size + '-push-' + props[push]);
    }

    let pull = size + 'Pull';
    if (props[pull] > 0) {
      classes.push('col-' + size + '-pull-' + props[pull]);
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
