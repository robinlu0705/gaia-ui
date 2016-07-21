import {} from './EnumSelect.less';
import React from 'react';

class EnumSelect extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let { className, name, options, value, skin, direction } = this.props;
    let rootClasses = ['Gaia-forms-EnumSelect']
      .concat(className ? className.split(' ') : [])
      .concat(skin ? `skin-${skin}` : [])
      .concat([`direction-${direction}`]);

    let rootProps = Object.assign({}, this.props, {
      className: rootClasses.join(' '),
      onChange: undefined
    });

    let optionElms = options.map((val, idx) => {
      let isChecked = value && value === val.value;

      return <div className="option" key={idx}>
        <input className="hidden-radio" name={name} id={`${name}-${idx}`} type="radio" value={val.value} checked={isChecked} onChange={this.handleChange} />
        <label className="label" htmlFor={`${name}-${idx}`}><span className="text">{val.text}</span></label>
      </div>;
    });

    return <div {...rootProps}>
      {optionElms}
    </div>;
  }

  handleChange(e) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e.target.value);
    }
  }
};

EnumSelect.propTypes = {
  name: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    value: React.PropTypes.string,
    text: React.PropTypes.string
  })),
  value: React.PropTypes.string,
  skin: React.PropTypes.oneOf(['primary', 'contrast', 'secondary', 'tertiary']),
  direction: React.PropTypes.oneOf(['row', 'column']),
  onChange: React.PropTypes.func
};

EnumSelect.defaultProps = {
  options: [],
  direction: 'row'
};

export default EnumSelect;
