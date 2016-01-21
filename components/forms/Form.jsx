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
    let mixin = {
      register: this.register.bind(this),
      notifyChange: this.notifyChange.bind(this),
      getValidationResult: this.getValidationResult.bind(this),
      checkFormValid: this.checkFormValid.bind(this)
    };

    return {
      FormMixin: mixin
    }
  }

  register(name, value) {
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

  notifyChange(name, value) {
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

  getValidationResult(inputName, force = false) {
    let inputState = this.state.inputState;
    let validation = this.props.validation;
    let defaultRes = {
      status: 'normal',
      errMsg: ''
    };

    if (inputState.hasOwnProperty(inputName) && validation.hasOwnProperty(inputName)) {
      let isPristine = inputState[inputName].isPristine;

      if (!isPristine || force) {
        let value = inputState[inputName].value;
        let tests = this.props.validation[inputName];
        let errMsgs = this.props.validationError[inputName];
        
        for (let key in tests) {
          if (typeof tests[key] === 'function') {
            let isValid = tests[key](value);

            if (!isValid) {
              return {
                status: 'error',
                errMsg: errMsgs && errMsgs[key] || 'Wrong Input'
              };
            }
          }
        }

        return {
          status: 'valid',
          errMsg: ''
        };
      }
    };

    return defaultRes;
  };

  checkFormValid(force = false) {
    let inputState = this.state.inputState;
    let validation = this.props.validation;

    for (let name in validation) {
      let res = this.getValidationResult(name, force);
      
      if (!res.isValid) {
        return false;
      }
    }

    return true;
  };

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
    
    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(event);
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
