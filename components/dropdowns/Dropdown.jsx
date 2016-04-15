import {} from './Dropdown.less';
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFolded: true
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
  }

  render() {
    let { value, isFolded } = this.state;
    let { caption, options, className, skin } = this.props;
    let classes = ['Gaia-dropdowns-Dropdown']
      .concat(skin ? `skin-${skin}` : [])
      .concat(isFolded ? 'is-folded' : [])
      .concat(className ? className.split(' ') : []);

    let rootProps = Object.assign({}, this.props, {
      className: classes.join(' ')
    });

    let dropdownItems = [];

    options.forEach((val, idx) => {
      let link;

      if (typeof val.action === 'function') {
        link = (
          <a href="#"
            onClick={(e) => {
              e.preventDefault();
              val.action();
            }}
          >
            {val.text}
          </a>
        );
      } else {
        link = <a href={val.action}>{val.text}</a>;
      }

      dropdownItems.push((
        <li key={idx} onClick={this.handleDropdownItemClick}>
          {link}
        </li>
      ));
    });

    return (
      <div {...rootProps}>
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
          {caption}
          <div className="clickable-area"
            onClick={this.handleBtnClick}
          />
        </div>
      </div>
    );
  }

  handleBtnClick(event) {
    this.setState((prevState, curProps) => {
      return Object.assign({}, prevState, {
        isFolded: !prevState.isFolded
      });
    });
  }

  handleDropdownItemClick() {
    this.setState((prevState, curProps) => {
      return {
        isFolded: true
      };
    });
  }
};

Dropdown.propTypes = {
  caption: React.PropTypes.string,
  skin: React.PropTypes.oneOf(['primary', 'contrast', 'secondary', 'tertiary']),
  /**
   * shape of { text, action },
   * action can be an URL string or a callback function
   */
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    action: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.string
    ])
  }))
};

export default Dropdown;
