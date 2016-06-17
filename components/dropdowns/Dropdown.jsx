import {} from './Dropdown.less';
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillMount() {
    if (typeof this.props.onOutsideClick === 'function') {
      document.addEventListener('click', this.handleClickOutside, false);
    }
  }

  componentWillUnmount() {
    if (typeof this.props.onOutsideClick === 'function') {
      document.removeEventListener('click', this.handleClickOutside, false);
    }
  }

  render() {
    let { isExpanded, align, trigger, pane, className } = this.props;
    let { onTriggerClick } = this.props;
    let rootClass = ['Gaia-dropdowns-Dropdown']
      .concat(isExpanded ? ['is-expanded'] : [])
      .concat([`align-${align}`])
      .concat(className ? className.split(' ') : []);

    let rootProps = Object.assign({}, this.props, {
      className: rootClass.join(' ')
    });

    return (
      <div {...rootProps} ref="root">
        <div className="trigger" onClick={onTriggerClick}>{trigger}</div>
        <div className="pane-wrap"><div className="pane">{pane}</div></div>
      </div>
    );
  }

  handleClickOutside(e) {
    if (!(this.refs.root.contains(e.target)) && document.contains(e.target)) {
      this.props.onOutsideClick()
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
  onTriggerClick: React.PropTypes.func,
  /**
   * triggered when outside of Dropdown is clicked
   */
  onOutsideClick: React.PropTypes.func
};

Dropdown.defaultProps = {
  align: 'left'
}

export default Dropdown;
