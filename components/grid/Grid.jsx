import {} from './flexboxgrid.css';
import React from 'react';

let Grid = (props) => {
  let classes = props.className && props.className.split(' ') || [];
  let rootProps;

  classes.push(props.fluid && 'container-fluid' || 'container');
  rootProps = Object.assign({}, props, {
    className: classes.join(' ')
  });

  return (
    <div {...rootProps}>{props.children}</div>
  )
};

Grid.propTypes = {
  fluid: React.PropTypes.bool
};

Grid.defaultProps = {
  fluid: false
}

export default Grid;
