import {} from './Alert.less';
import React from 'react';

let Alert = ({ className, contains, skin }) => {

  let classes = ['Gaia-alerts-Alert']
    .concat(skin ? `skin-${skin}` : [])
    .concat(className ? className.split(' ') : []);

  return (
    <div className={classes.join(' ')}>{contains}</div>
  );
};

Alert.propTypes = {
  skin: React.PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  contains: React.PropTypes.string
}

export default Alert;
