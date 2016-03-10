import {} from './Nav.less';
import React from 'react';

class Nav extends React.Component {
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
      <nav className="Gaia-navs-Nav">
        <ul>
          {list}
        </ul>
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

export default Nav;
