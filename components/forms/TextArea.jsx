import {} from './TextArea.less';
import React from 'react';

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let onChange = this.props.onChange;
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  }

  render() {
    let inputClasses = ['Gaia-forms-TextArea'];
      
    let inputProps = Object.assign({}, this.props, {
      placeholder: this.props.placeholder,
      disabled: this.props.disabled,
      value: this.props.value,
      defaultValue: this.props.defaultValue,
      onChange: this.handleChange,
      autofocus: this.props.autofocus,
      rows: this.props.rows,
      className: inputClasses.join(' ')
    });

    return (
      <textarea {...inputProps}></textarea>
    )
  }
}

TextArea.propTypes = {
  resize: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  autofocus: React.PropTypes.bool,
  onChange: React.PropTypes.func
};

TextArea.defaultProps = {
  resize: false,
  placeholder: '',
  value: '',
  defaultValue: '',
  disabled: false,
  autofocus: false,
  rows: 1
};

export default TextArea;
