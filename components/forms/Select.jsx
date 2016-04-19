import {} from './Select.less';
import React from 'react';

const Select = (props) => {
  let { option, onChange, style, className } = props;
  let optionList = [];
  let handleChange = (e) => {
    onChange(e.target.value); 
  };

  let rootClasses = ['Gaia-forms-Select'].concat(className ? className : []);
  let rootProps = Object.assign({}, {
    style: style,
    className: rootClasses.join(' ')
  });

  let selectProps = Object.assign({}, props, {
    onChange: handleChange,
    className: '',
    style: {},
  });

  option.forEach((item, idx) => {
    optionList.push(<option key={idx} value={item.val}>{item.text}</option>);
  });

  return (
    <div {...rootProps}>
      <select {...selectProps}>
        {optionList}
      </select>
    </div>
  );
};

Select.propTypes = {
  /** 
   * Example: [{val: 1, text: 'Jan'}] 
   */
  option: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

Select.defaultProps = {
  option: []
};

export default Select;
