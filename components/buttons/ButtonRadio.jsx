import {} from './ButtonRadio.less';
import React from 'react';

let ButtonRadio = (props) => {
  let { className, disabled, choices, checked, radioName, onInputChange } = props;
  let items = [];
  let classes = ['Gaia-buttons-ButtonRadio']
    .concat(className ? className.split(' ') : []);

  let handleChange = (e) => {
    onInputChange(e.currentTarget.value);
  };

  choices.forEach((val, idx) => {
    let unitClasses = ['unit']
      .concat(disabled.indexOf(val) !== -1 ? 'disabled' : '')
      .concat(checked == val ? 'checked' : '');

    items.push(
      <label key={idx} htmlFor={radioName + idx} className={unitClasses.join(' ')}>
        {val}
        <input 
          type="radio" 
          id={radioName + idx} 
          name={radioName} 
          onChange={handleChange} 
          disabled={disabled.indexOf(val) !== -1}
          value={val}>
        </input>
      </label>
    );
  });

  return (
    <div className={classes.join(' ')}>
      {items}
    </div>
  );
};

ButtonRadio.propTypes = {
  choices: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  checked: React.PropTypes.string.isRequired,
  radioName: React.PropTypes.string.isRequired,
  onInputChange: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.arrayOf(React.PropTypes.string)
}

ButtonRadio.defaultProps = {
  disabled: []
}

export default ButtonRadio;
