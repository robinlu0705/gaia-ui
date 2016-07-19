import {} from './Radio.less';
import React from 'react';

let Radio = (props) => {
  let { className, disabled, choices, checked, radioName, onInputChange } = props;
  let items = [];
  let classes = ['Gaia-forms-Radio']
    .concat(className ? className.split(' ') : []);

  let handleChange = (e) => {
    onInputChange(e.currentTarget.value);
  };

  choices.forEach((val, idx) => {
    let labelClasses = []
      .concat(disabled.indexOf(val) !== -1 ? 'disabled' : '')
      .concat(checked == val ? 'checked' : '');

    items.push(
      <div key={idx} className="unit">
        <input 
          type="radio" 
          id={radioName + idx} 
          name={radioName} 
          onChange={handleChange} 
          disabled={disabled.indexOf(val) !== -1}
          value={val}>
        </input>
        <label htmlFor={radioName + idx} className={labelClasses.join(' ')}>{val}</label>
      </div>
    );
  });

  return (
    <div className={classes.join(' ')}>
      {items}
    </div>
  );
};

Radio.propTypes = {
  choices: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  checked: React.PropTypes.string.isRequired,
  radioName: React.PropTypes.string.isRequired,
  onInputChange: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.arrayOf(React.PropTypes.string)
}

Radio.defaultProps = {
  disabled: []
}

export default Radio;
