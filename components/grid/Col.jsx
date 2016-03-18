import React from 'react';

let sizes = ['xs', 'sm', 'md', 'lg'];

let Col = (props) => {
  let classes = props.className && props.className.split(' ') || [];
  let newProps;
  
  sizes.forEach((size) => {
    if (props[size] > 0) {
      classes.push('col-' + size + '-' + props[size]);
    }

    let hidden = size + 'Hidden';
    if (props[hidden] > 0) {
      classes.push('col-' + size + '-hidden-' + props[hidden]);
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

Col.propTypes = {
  xs: React.PropTypes.number,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number,
  xsHidden: React.PropTypes.bool,
  smHidden: React.PropTypes.bool,
  mdHidden: React.PropTypes.bool,
  lgHidden: React.PropTypes.bool,
  xsOffset: React.PropTypes.number,
  smOffset: React.PropTypes.number,
  mdOffset: React.PropTypes.number,
  lgOffset: React.PropTypes.number,
  xsPush: React.PropTypes.number,
  smPush: React.PropTypes.number,
  mdPush: React.PropTypes.number,
  lgPush: React.PropTypes.number,
  xsPull: React.PropTypes.number,
  smPull: React.PropTypes.number,
  mdPull: React.PropTypes.number,
  lgPull: React.PropTypes.number
};

export default Col;
