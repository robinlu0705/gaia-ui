import {} from './Select.less';
import React from 'react';

class Select extends React.Component {
  render() {
    let { className, style } = this.props;
    let classes = ['Gaia-forms-Select'].concat(className ? className.split(' ') : []);

    let wrapProps = Object.assign({}, {
      style: style,
      className: classes.join(' ')
    });

    let selectProps = Object.assign({}, this.props, {
      className: '',
      style: {}
    });

    console.log(selectProps);

    return (
      <div {...wrapProps}>
        <select {...selectProps}>
          {this.props.children}
        </select>
      </div>
    );
  }
};

export default Select;
