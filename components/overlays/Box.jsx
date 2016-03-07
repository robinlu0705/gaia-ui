import {} from './Box.less';
import React from 'react';
import Button from '../buttons/Button';
import { Grid, Col, Row } from 'Gaia/components/grid/Grid';

class Box extends React.Component {
  // constructor(props) {
  //   super(props);

  //   let { isOpened } = props;
  //   this.state = {
  //     isOpened
  //   };
  // }

  render() {
    let { className, title, content, isOpened, onClose, width, minWidth } = this.props;
    // let { isOpened } = this.state;
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

export default Box;
