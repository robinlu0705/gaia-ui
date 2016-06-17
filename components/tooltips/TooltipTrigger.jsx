import {} from './TooltipTrigger.less';
import React from 'react';

let TooltipTrigger = (props) => {
  let { className, tooltip, align } = props;
  let rootClasses = ['Gaia-tooltips-TooltipTrigger']
    .concat(className ? className.split(' ') : [])
    .concat([`align-${align}`]);
  let rootProps = Object.assign({}, props, {
    className: rootClasses.join(' ')
  });
  
  return <div {...rootProps}>
    {props.children}
    <div className="tooltip">
      <div className="tooltip-content">
        {tooltip}
      </div>
    </div>
  </div>;
};

TooltipTrigger.propTypes = {
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  tooltip: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])
};

TooltipTrigger.defaultProps = {
  align: 'left'
};

export default TooltipTrigger;
