import {} from './flexboxgrid.css';
import React from 'react';

const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  first: 'first',
  last: 'last'
};

let Col = (props) => {
  let classes = ['col'].concat(props.className ? props.className.split(' ') : []);
  let rootProps;
  
  for (const key in props) {
    if (props.hasOwnProperty(key)) {
      if (key === 'fit' && props[key]) {
        classes.push('col-fit');
      } else if (classMap[key]) {
        classes.push(`${classMap[key]}-${props[key]}`);
      }
    }
  }

  rootProps = Object.assign({}, props, {
    className: classes.join(' ')
  });
  
  return (
    <div {...rootProps}>{props.children}</div>
  )
}

Col.propTypes = {
  xs: React.PropTypes.number,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number,
  xsOffset: React.PropTypes.number,
  smOffset: React.PropTypes.number,
  mdOffset: React.PropTypes.number,
  lgOffset: React.PropTypes.number,
  first: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  last: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  fit: React.PropTypes.bool
};

export default Col;
