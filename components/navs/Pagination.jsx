import {} from './Pagination.less';
import React from 'react';

class Pagination extends React.Component {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.onChange = this.props.onChange.bind(this);
    this.state = {
      activePage: this.props.activePage,
      itemsNumber: Math.ceil(this.props.items),
      ellipsis: this.props.ellipsis,
      next: this.props.next,
      prev: this.props.prev 
    }
  }

  handleItemClick(key) {
    this.onChange(key);
    this.setState({
      activePage: key
    });
  }

  handleClickNextButton() {
    let nextPage = this.state.activePage != this.state.itemsNumber ? this.state.activePage + 1 : this.state.itemsNumber;
    this.onChange(nextPage);
    this.setState({
      activePage: nextPage
    });
  }

  handleClickPreviousButton() {
    let previousPage = this.state.activePage != 1 ? this.state.activePage - 1 : 1;
    this.onChange(previousPage);
    this.setState({
      activePage: previousPage
    });
  }

  render() {
    let list = [];
    let displayPagination = [];
    let first = 0;
    let last = this.state.itemsNumber;
    let position = 0;
    let middle = false;

    if (this.state.ellipsis && this.state.itemsNumber > 10) {
      if (this.state.activePage < 5) {
        last = 5;
        list.push(<li key={0} className="disabled">...</li>);
        list.push(<li key={1} onClick={this.handleItemClick.bind(this, this.state.itemsNumber)}>{this.state.itemsNumber}</li>);
      } else if (this.state.activePage > this.state.itemsNumber - 4) {
        position = 2;
        first = this.state.itemsNumber - 5;
        list.push(<li key={0} onClick={this.handleItemClick.bind(this, 1)}>1</li>);
        list.push(<li key={1} className="disabled">...</li>);
      } else {
        middle = true;
        first = this.state.activePage - 3; 
        last = this.state.activePage + 2;
        list.push(<li key={0} onClick={this.handleItemClick.bind(this, 1)}>1</li>);
        list.push(<li key={1} className="disabled">...</li>);
        list.push(<li key={2} className="disabled">...</li>);
        list.push(<li key={3} onClick={this.handleItemClick.bind(this, this.state.itemsNumber)}>{this.state.itemsNumber}</li>);
      }
    }

    for (let i = first; i < last; i++) {
      let className = (i + 1) === this.state.activePage ? 'active' : '';
      let item = (
        <li key={i + 3} className={className} onClick={this.handleItemClick.bind(this, i + 1)}>{i + 1}</li>
      );

      if (middle) {
        list.splice(position + i - this.state.activePage + 5, 0, item);
      } else {
        list.splice(position + i, 0, item);
      }
    }

    displayPagination.push(list);

    if (this.state.next && this.state.itemsNumber > 0) {
      displayPagination.splice(0, 0, <li key={this.state.itemsNumber + 1} onClick={this.handleClickPreviousButton.bind(this)}>«</li>);
    }
    if (this.state.prev && this.state.itemsNumber > 0) {
      displayPagination.splice(displayPagination.length, 0, <li key={this.state.itemsNumber + 2} onClick={this.handleClickNextButton.bind(this)}>»</li>);
    }

    return (
      <ul className="Gaia-navs-Pagination">
        {displayPagination}
      </ul>
    );
  }
}

Pagination.propTypes = {
  /**
   * The page number you want to active 
   */
  activePage: React.PropTypes.number,
  /** 
   * The number of pages 
   */
  items: React.PropTypes.number,
  /**
   * When true, will display the default node value ('...')
   */
  ellipsis: React.PropTypes.bool,
  /**
   * When true, will display the default node value ('«')
   */
  prev: React.PropTypes.bool,
  /**
   * When true, will display the default node value ('»')
   */
  next: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired
};

Pagination.defaultProps = {
  activePage: 1,
  items: 1,
  ellipsis: true,
  next: true,
  prev: true
};

export default Pagination;
