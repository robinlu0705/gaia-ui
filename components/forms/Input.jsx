import {} from './Input.less';
import React from 'react';

class Input extends React.Component {
  render() {
    let className = 'Gaia-forms-Input';
    let errMsg = '';
    let getValidationResult = this.context.FormMixin && this.context.FormMixin.getValidationResult || function() {};
    let validationRes = getValidationResult(this.props.vid);
    if (!validationRes.isValid) {
      className += ' is-error';
      errMsg = validationRes.errMsg;
    }
    return (
      <div className={className}>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <div className="msg">{errMsg}</div>
      </div>
    );
  }
  handleChange(event) {
    let notifyChange = this.context.FormMixin && this.context.FormMixin.notifyChange || function() {};
    notifyChange(this, event.target.value);
  }
}

Input.contextTypes = {
  FormMixin: React.PropTypes.object
};

Input.propTypes = {
  vid: React.PropTypes.string.isRequired
};

export default Input;
