import {} from './flexboxgrid.css';
import React from 'react';

const classMap = {
  start: 'start',
  center: 'center',
  end: 'end',
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
  around: 'around',
  between: 'between',
  reverse: 'reverse'
};

let Row = (props) => {
  let classes = ['row'].concat(props.className ? props.className.split(' ') : []);
  let rootProps;

  for (const key in props) {
    if (props.hasOwnProperty(key) && classMap[key]) {
      if (key === 'reverse') {
        classes.push(classMap[key]);
      } else {
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

const sizeType = React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);

Row.propTypes = {
  start: sizeType,
  center: sizeType,
  end: sizeType,
  top: sizeType,
  middle: sizeType,
  bottom: sizeType,
  around: sizeType,
  between: sizeType,
  first: sizeType,
  last: sizeType,
  className: React.PropTypes.string,
  tagName: React.PropTypes.string,
  reverse: React.PropTypes.bool
};

export default Row;
