import {} from './Box.less';
import React from 'react';
import Button from '../buttons/Button';
import { Grid, Col, Row } from '../grid';

class Box extends React.Component {
  render() {
    let { className, title, content, isOpened, onClose, width, minWidth } = this.props;
    let classes = ['Gaia-overlays-Box']
      .concat(isOpened ? [] : ['is-closed']);
    let dialogStyle = { width, minWidth };

    return (
      <div className={classes.join(' ')}>
        <div className="overlay"
          onClick={(e) => {
            if (typeof onClose === 'function' && e.target.className === 'overlay') {
              onClose();
            }
          }}
        >
          <div className="dialog" style={dialogStyle}>
            <div className="title">
              {title}
            </div>
            <div className="content">
              {content}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Box.propTypes = {
  width: React.PropTypes.string.isRequired,
  minWidth: React.PropTypes.string,
  title: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string
  ]),
  content: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string
  ]),
  isOpened: React.PropTypes.bool,
  /**
   * invoked when user triggers an exit-behavior like clicking at outside of the box
   */
  onClose: React.PropTypes.func,
};

export default Box;
