import {} from './Input.less';
import React from 'react';

class Input extends React.Component {
  render() {
    let classes = ['Gaia-forms-Input'].concat(this.props.className && this.props.className.split(' ') || []);
    let errMsg = '';
    let inputProps = Object.assign({}, this.props, {
      type: 'text',
      onChange: this.handleChange,
      className: ''
    })

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

    return (
      <div className={classes.join(' ')}>
        <input {...inputProps} />
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
    let customChange = this.props.customChange;
    
    if (this.props.name && typeof notifyChange === 'function') {
      notifyChange(this.props.name, event.target.value);
    }

    if (typeof customChange === 'function') {
      customChange(event.target.value);
    }
  }
}

Input.contextTypes = {
  FormMixin: React.PropTypes.object
};

Input.propTypes = {
  name: React.PropTypes.string
};

export default Input;
