import {} from './Tooltip.less';
import React from 'react';

let Tooltip = (props) => {
  let { className } = props;
  let rootClasses = ['Gaia-tooltips-Tooltip']
    .concat(className ? className.split(' ') : []);

  let rootProps = Object.assign({}, props, {
    className: rootClasses.join(' ')
  });

  return <div {...rootProps}>{props.children}</div>
};

export default Tooltip;
