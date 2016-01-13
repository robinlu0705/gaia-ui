import {} from './Form.less';
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
     )
  }
  constructor(props) {
    super(props);
    let inputValues = {};
    let pristineList = {};
    for (let key in props.validations) {
      inputValues[key] = '';
      pristineList[key] = true;
    }
    this.state = {};
    this.state.inputValues = inputValues;
    this.state.pristineList = pristineList;
    this.handleSubmit = (event) => {
      let newPristineList = Object.assign({}, this.state.pristineList);
      for (let key in newPristineList) {
        newPristineList[key] = false;
      }
      this.setState(Object.assign({}, this.state, {
        pristineList: newPristineList
      }));
      
      let canSubmit = this.checkFormValid(true);
      if (!canSubmit) {
        event.preventDefault();
      }
      
      let customSubmit = props.onSubmit;
      if (customSubmit && typeof customSubmit === 'function') {
        props.onSubmit(event);
      }
    };
    this.getValidationResult = (vid, force=false) => {
      let isPristine = this.state.pristineList[vid];
      let res = {
        isValid: true,
        errMsg: ''
      };
      if (!isPristine || force) {
        let value = this.state.inputValues[vid];
        let validations = this.props.validations[vid];
        let validationErrors = this.props.validationErrors[vid];
        for (let key in validations) {
          if (validations.hasOwnProperty(key) && typeof validations[key] === 'function') {
            let isValid = validations[key](value);
            if (!isValid) {
              res.isValid = false;
              res.errMsg = validationErrors[key] || 'wrong input';
            }
          }
        }
      }
      return res;
    };
    this.checkFormValid = (force=false) => {
      for (let vid in this.props.validations) {
        let res = this.getValidationResult(vid, force);
        if (!res.isValid) {
          return false;
        }
      }
      return true;
    };
  }
  getChildContext() {
    let mixin = {
      getValidationResult: this.getValidationResult,
      notifyChange: (component, value) => {
        let vid = component.props.vid;
        let newInputValues = Object.assign({}, this.state.inputValues, {
          [component.props.vid]: value
        });
        let newPristineList = Object.assign({}, this.state.pristineList, {
          [component.props.vid]: false
        });
        this.setState(Object.assign({}, this.state, {
          inputValues: newInputValues,
          pristineList: newPristineList
        }));
      },
      checkFormValid: this.checkFormValid
    };
    return {
      FormMixin: mixin
    }
  }
}

Form.childContextTypes = {
  FormMixin: React.PropTypes.object
};

Form.propTypes = {
  validations: React.PropTypes.objectOf(
    React.PropTypes.objectOf(
      React.PropTypes.func.isRequired
    )
  ),
  validationErrors: React.PropTypes.objectOf(
    React.PropTypes.objectOf(
      React.PropTypes.string
    )
  )
};

export default Form;
