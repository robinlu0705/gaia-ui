import {} from './Input.less';
import React from 'react';

class Input extends React.Component {
  render() {
    let classes = ['Gaia-forms-Input'].concat(this.props.className && this.props.className.split(' ') || []);
    let errMsg = '';
    let inputProps = Object.assign({}, this.props, {
      type: 'text',
      onChange: this.handleChange,
      className: '',
      style: {}
    });

    let getValidationResult = this.context.FormMixin && this.context.FormMixin.getValidationResult;

    if (typeof getValidationResult === 'function') {
      let validationRes = getValidationResult(this.props.name);
    
      if (validationRes.status === 'valid') {
        classes.push('is-valid');
      } else if (validationRes.status === 'error') {
        classes.push('is-error');
        errMsg = validationRes.errMsg;
      }
    }

    let wrapProps = Object.assign({}, {
      style: this.props.style,
      className: classes.join(' ')
    });

    return (
      <div {...wrapProps}>
        <input ref="inputNode" {...inputProps} />
        <div className="msg">{errMsg}</div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let register = this.context.FormMixin && this.context.FormMixin.register;

    if (this.props.name && typeof register === 'function') {
      register(this.props.name, this.props.value);
    }
  }

  handleChange(event) {
    let notifyChange = this.context.FormMixin && this.context.FormMixin.notifyChange;
    let onChangeCB = this.props.onChange;
    
    if (this.props.name && typeof notifyChange === 'function') {
      notifyChange(this.props.name, event.target.value);
    }

    if (typeof onChangeCB === 'function') {
      onChangeCB(event.target.value);
    }
  }

  val() {
    return this.refs.inputNode.value;
  }
}

Input.contextTypes = {
  FormMixin: React.PropTypes.object
};

Input.propTypes = {
  name: React.PropTypes.string,
  onChange: React.PropTypes.func
};

export default Input;
