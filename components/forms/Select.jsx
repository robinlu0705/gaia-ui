import {} from './Select.less';
import React from 'react';

const Select = ({ defaultValue, option, onChange }) => {

  let optionList = [];
  let handleChange = (e) => {
    onChange(e.target.value); 
  };

  option.forEach((item, idx) => {
    optionList.push(<option key={idx} value={item.val}>{item.text}</option>);
  });

  return (
    <div className="Gaia-forms-Select">
      <select defaultValue={defaultValue} onChange={handleChange}>
        {optionList}
      </select>
    </div>
  );
};

Select.propTypes = {
  /** 
   * Default selected value 
   */
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]).isRequired,
  /** 
   * Example: [{val: 1, text: 'Jan'}] 
   */
  option: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

Select.defaultProps = {
  defaultValue: 0,
  option: []
};

export default Select;
