import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        {this.props.children}
      </form>
     )
  }

  constructor(props) {
    super(props);
    this.state = {
      inputState: {}
    };
  }

  getChildContext() {
    let register = (name, value) => {
      this.setState((prevState, curProps) => {
        let newInputState = Object.assign({}, prevState.inputState);
        newInputState[name] = {
          value: value,
          isPristine: true
        };
        return Object.assign({}, prevState, {
          inputState: newInputState
        });
      });
    };

    let notifyChange = (name, value) => {
      this.setState((prevState, curProps) => {
        let newInputState = Object.assign({}, prevState.inputState, {
          [name]: {
            value: value,
            isPristine: false
          }
        });

        return Object.assign({}, prevState, {
          inputState: newInputState
        });
      });
    };

    let getValidationResult = (inputName, force = false) => {
      let inputState = this.state.inputState;
      let validation = this.props.validation;
      let defaultRes = {
        isValid: true,
        errMsg: ''
      };

      if (inputState.hasOwnProperty(inputName) && validation.hasOwnProperty(inputName)) {
        let isPristine = inputState[inputName].isPristine;

        if (!isPristine || force) {
          let value = inputState[inputName].value;
          let tests = this.props.validation[inputName];
          let errMsgs = this.props.validation[inputName];
          
          for (let key in tests) {
            if (typeof tests[key] === 'function') {
              let isValid = tests[key](value);

              if (!isValid) {
                return {
                  isValid: false,
                  errMsg: errMsgs[key] || 'Wrong Input'
                }
              }
            }
          }
        }
      };

      return defaultRes;
    };

    let checkFormValid = (force = false) => {
      let inputState = this.state.inputState;
      let validation = this.props.validation;

      for (let name in validation) {
        let res = getValidationResult(name, force);
        
        if (!res.isValid) {
          return false;
        }
      }

      return true;
    };

    let mixin = {
      register, notifyChange, getValidationResult, checkFormValid
    };

    return {
      FormMixin: mixin
    }
  }

  handleSubmit(event) {
    this.setState((prevState, curProps) => {
      let newInputState = Object.assign({}, prevState.inputState);
      
      for (let key in newInputState) {
        newInputState[key].isPristine = false;
      }

      return Object.assign({}, this.state, {
        inputState: newInputState
      });
    });
    
    if (!this.checkFormValid(true)) {
      event.preventDefault();
    }
    
    if (typeof props.onSubmit === 'function') {
      props.onSubmit(event);
    }
  };
}

Form.childContextTypes = {
  FormMixin: React.PropTypes.object
};

Form.propTypes = {
  validation: React.PropTypes.objectOf(
    React.PropTypes.objectOf(
      React.PropTypes.func
    )
  ),
  validationError: React.PropTypes.objectOf(
    React.PropTypes.objectOf(
      React.PropTypes.string
    )
  )
};

export default Form;
