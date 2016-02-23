import {} from './Dropdown.less';
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    let value;

    props.options.forEach((val, idx) => {
      if (val.value) {
        if (val.value === props.value || value === undefined) {
          value = val.value;
        }
      }
    });

    this.state = {
      isFolded: true,
      value: value
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
  }

  render() {
    let { value, isFolded } = this.state;
    let { options, className, skin } = this.props;
    let classes = ['Gaia-dropdowns-Dropdown']
      .concat(skin ? `skin-${skin}` : [])
      .concat(isFolded ? 'is-folded' : [])
      .concat(className ? className.split(' ') : []);

    let dropdownItems = [];
    let optionItems = [];
    let currentSelectedText;

    options.forEach((val, idx) => {
      if (val.value) {
        optionItems.push((
          <option key={idx} value={val.value}>{val.text}</option>
        ));
        dropdownItems.push((
          <li key={idx}
            onClick={
              (event) => {
                this.handleDropdownItemClick(val.value)
              }
            }
          >
            {val.text}
          </li>
        ));

        if (currentSelectedText === undefined || val.value === value) {
          currentSelectedText = val.text;
        }
      }
    });

    return (
      <div className={classes.join(' ')}>
        <div className="list-pivot">
          <div className="list">
            <ul>
              {dropdownItems}
            </ul>
            <div className="triangle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="value">
          {currentSelectedText}
          <div className="clickable-area"
            onClick={this.handleBtnClick}
          />
        </div>
        <select name={this.props.name} value={value}
          onChange={this.handleSelectChange}
        >
          {optionItems}
        </select>
      </div>
    );
  }

  handleBtnClick(event) {
    console.log('click');
    this.setState((prevState, curProps) => {
      return Object.assign({}, prevState, {
        isFolded: !prevState.isFolded
      });
    });
  }

  handleSelectChange(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value
    });
  }

  handleDropdownItemClick(val) {
    console.log(val);
    this.setState({
      isFolded: true,
      value: val
    });
  }
};

export default Dropdown;
