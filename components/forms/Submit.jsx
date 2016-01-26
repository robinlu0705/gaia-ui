import {} from './Submit.less';
import React from 'react';

class Submit extends React.Component {
  render() {
    let checkFormValid = this.context.FormMixin && this.context.FormMixin.checkFormValid || function() { return true; };
    let isFormValid = checkFormValid();
    let attrDisabled = isFormValid && '' || 'disabled';
    let inputClasses = ['Gaia-forms-Submit'].concat(this.props.className && this.props.className.split[' '] || []);
    let inputProps = Object.assign({}, this.props, {
      type: 'submit',
      value: this.props.value,
      disabled: this.props.disabled || !isFormValid,
      className: inputClasses.join(' ')
    });

    return (
      <input {...inputProps} />
    )
  }
}

Submit.contextTypes = {
  FormMixin: React.PropTypes.object
};

Submit.propTypes = {
  onSubmit: React.PropTypes.func
};

export default Submit;
