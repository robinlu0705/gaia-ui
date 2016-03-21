import {} from './Button.less';
import React from 'react';

let Button = (props) => {
  let { className, children, skin } = props;
  let classes = ['Gaia-buttons-Button']
    .concat(skin ? `skin-${skin}` : [])
    .concat(className ? className.split(' ') : []);

  let newProps = Object.assign({}, props, {
    type: 'button',
    className: classes.join(' ')
  });

  return (
    <button {...newProps}>{children}</button>
  );
};

Button.propTypes = {
  skin: React.PropTypes.oneOf(['primary', 'contrast', 'secondary', 'tertiary'])
}

export default Button;
