import {} from './Card.less';
import React from 'react';

class Card extends React.Component {
  render() {
    let titleClasses = ['title'];
    
    titleClasses.push(this.props.title ? '' : 'is-hide');

    return (
      <div className="Gaia-cards-Card">
        <div className={titleClasses.join(' ')}>{this.props.title}</div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

Card.propTypes = {
  title: React.PropTypes.string
}

export default Card;
