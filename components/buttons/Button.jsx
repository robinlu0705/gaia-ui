import {} from './Button.less';
import React from 'react';

let Button = (props) => {
  let { className, children, skin, disabled } = props;
  let classes = ['Gaia-buttons-Button']
    .concat(skin ? `skin-${skin}` : [])
    .concat(className ? className.split(' ') : []);

  let newProps = Object.assign({}, props, {
    type: 'button',
    disabled: disabled,
    className: classes.join(' ')
  });

  return (
    <button {...newProps}>{children}</button>
  );
};

Button.propTypes = {
  skin: React.PropTypes.oneOf(['primary', 'contrast', 'secondary', 'tertiary']),
  disabled: React.PropTypes.bool
}

Button.defaultProps = {
  disabled: false
}

export default Button;
