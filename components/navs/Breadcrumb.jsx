import {} from './Breadcrumb.less';
import React from 'react';

class Breadcrumb extends React.Component {
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

  render() {
    let tabs = this.props.tabs || [];
    let classes = this.props.className && this.props.className.split(' ') || [];
    let list = [];
    let newProps;
    
    classes.push('Gaia-navs-Breadcrumb');
    classes.push(this.props.disableLast ? 'disableLast' : 'ableLast');

    newProps = Object.assign({}, this.props, {
      className: classes.join(' ')
    });

    for (let key in tabs) {
      let tab = tabs[key];
      let item = (
        <li key={key}><span onClick={this.handleItemClick.bind(this, key)}>{tab}</span></li>
      );
      list.push(item);
    };

    return (
      <nav {...newProps}>
        <ol>
          {list}
        </ol>
      </nav>
    );
  }
}

Breadcrumb.propTypes = {
  tabs: React.PropTypes.array,
  disableLast: React.PropTypes.bool,
  className: React.PropTypes.string,
  onChange: React.PropTypes.func
};

Breadcrumb.defaultProps = {
  disableLast: true
};

export default Breadcrumb;
