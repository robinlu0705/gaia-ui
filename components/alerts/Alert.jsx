import {} from './Alert.less';
import React from 'react';

let Alert = ({ className, content, skin }) => {

  let classes = ['Gaia-alerts-Alert']
    .concat(skin ? `skin-${skin}` : [])
    .concat(className ? className.split(' ') : []);

  return (
    <div className={classes.join(' ')}>{content}</div>
  );
};

Alert.propTypes = {
  skin: React.PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  content: React.PropTypes.string
}

export default Alert;
