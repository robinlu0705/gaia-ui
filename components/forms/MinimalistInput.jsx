import {} from './MinimalistInput.less';
import React from 'react';

class MinimalistInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  render() {
    let { skin, className } = this.props;
    let { isFocused } = this.state;
    let rootClasses = ['Gaia-forms-MinimalistInput']
      .concat(className ? className.split(' ') : [])
      .concat(isFocused ? ['is-focused'] : [])
      .concat(skin ? `skin-${skin}` : []);

    let errMsg = '';
    let inputProps = Object.assign({}, this.props, {
      type: 'text',
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      className: '',
      style: {}
    });

    let rootProps = Object.assign({}, {
      style: this.props.style,
      className: rootClasses.join(' ')
    });

    return (
      <div {...rootProps}>
        <input ref="inputNode" {...inputProps} />
        <div className="msg">{errMsg}</div>
      </div>
    );
  }

  handleChange(event) {
    let onChangeCB = this.props.onChange;

    if (typeof onChangeCB === 'function') {
      onChangeCB(event.target.value);
    }
  }

  handleFocus(event) {
    let onFocusCB = this.props.onFocus;

    if (typeof onFocusCB === 'function') {
      onFocusCB();
    }

    this.setState({
      isFocused: true
    });
  }

  handleBlur(event) {
    let onBlurCB = this.props.onBlur;

    if (typeof onBlurCB === 'function') {
      onBlurCB();
    }

    this.setState({
      isFocused: false
    });
  }

  val() {
    return this.refs.inputNode.value;
  }
}

MinimalistInput.propTypes = {
  skin: React.PropTypes.oneOf(['primary', 'contrast', 'secondary', 'tertiary']),
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  onBlur: React.PropTypes.func
};

export default MinimalistInput;
