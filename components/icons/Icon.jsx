import {} from './Icon.less';

import React from 'react';

let Icon = (props) => {
  let classes = props.className && props.className.split(' ') || [];
  let newProps;
  
  classes.push('Gaia-icons-Icon');
  newProps = Object.assign({}, props, {
    className: classes.join(' ')
  });
  
  return (
    <i {...newProps}>{props.name}</i>
  )
}

Icon.propTypes = {
  /**
   * name of Icon Font
   */
  name: React.PropTypes.string.isRequired
};

export default Icon;
