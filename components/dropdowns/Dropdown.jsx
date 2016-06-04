import {} from './Dropdown.less';
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  render() {
    let { isExpanded, align, trigger, pane, className } = this.props;
    let rootClass = ['Gaia-dropdowns-Dropdown']
      .concat(isExpanded ? ['is-expanded'] : [])
      .concat(align ? [`align-${align}`] : [])
      .concat(className ? className.split(' ') : []);

    let rootProps = Object.assign({}, this.props, {
      className: rootClass.join(' ')
    });

    return (
      <div {...rootProps} ref="root">
        <div className="trigger">{trigger}</div>
        <div className="pane-wrap"><div className="pane">{pane}</div></div>
      </div>
    );
  }

  handleClickOutside(e) {
    let { onClickOutside } = this.props;

    if (typeof onClickOutside === 'function' && !(this.refs.root.contains(e.target))) {
      onClickOutside()
    }
  }
};

Dropdown.propTypes = {
  trigger: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]).isRequired,
  pane: React.PropTypes.element.isRequired,
  align: React.PropTypes.string,
  onClickOutside: React.PropTypes.func
};

export default Dropdown;
