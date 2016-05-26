import {} from './Breadcrumb.less';
import React from 'react';

class Breadcrumb extends React.Component {
  render() {
    let tabs = this.props.tabs || {};
    let selected = this.props.selected;
    let list = [];
    

    for (let key in tabs) {
      let tab = tabs[key];
      let className = key === selected ? 'is-selected' : '';
      let item = (
        <li key={key} className={className} onClick={this.handleItemClick.bind(this, key)}>{tab}</li>
      );

      list.push(item);
    };

    return (
      <nav className="Gaia-navs-Breadcrumb">
        <p>Test</p>
        <ol>
          {list}
        </ol>
      </nav>
    );
  }

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(key) {
    let onChange = this.props.onChange;
    if (typeof onChange === 'function') {
      onChange(key);
    }
  }
}

Breadcrumb.propTypes = {
  /**
   * object with property values of string or React Element
   */
  tabs: React.PropTypes.objectOf(React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ])),
  /**
   * avtivated tab
   */
  selected: React.PropTypes.string,
  /**
   * arguments: [ newSelected ]
   */
  onChange: React.PropTypes.func
};

export default Breadcrumb;
