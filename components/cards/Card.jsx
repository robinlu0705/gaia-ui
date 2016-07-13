import {} from './Card.less';
import { InputGroup, InputGroupLabel, Input } from '../forms';
import { Icon } from '../icons';
import React from 'react';

class Card extends React.Component {
  render() {
    let { className } = this.props;
    let rootClasses = ['Gaia-cards-Card'].concat(className ? className.split(' ') : []);
    let headerClasses = ['header'];
    let titleClasses = ['title'];
    let searchClasses = ['search'];

    if (!this.props.title && !this.props.search) {
      headerClasses.push('is-hide');
    } else if (!this.props.title && this.props.search){
      headerClasses.push('only-search');
    }

    titleClasses.push(this.props.title ? '' : 'is-hide');
    searchClasses.push(this.props.search ? '' : 'is-hide');

    return (
      <div className={rootClasses.join(' ')}>
        <div className={headerClasses.join(' ')}>
          <div className={titleClasses.join(' ')}>{this.props.title}</div>
          <InputGroup className={searchClasses.join(' ')}>
            <InputGroupLabel><Icon name="search" /></InputGroupLabel>
            <Input placeholder="search" onChange={this.props.searchOnChange}/>
          </InputGroup>
        </div>
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

Card.propTypes = {
  title: React.PropTypes.string,
  search: React.PropTypes.bool,
  searchOnChange: React.PropTypes.func
}

export default Card;
