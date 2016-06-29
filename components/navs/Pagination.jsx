import {} from './Pagination.less';
import React from 'react';

class Pagination extends React.Component {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(onChange, key) {
    onChange(key);
  }

  handleClickNextButton(onChange, activePage, items) {
    let nextPage = activePage != items ? activePage + 1 : items;
    onChange(nextPage);
  }

  handleClickPreviousButton(onChange, activePage) {
    let previousPage = activePage != 1 ? activePage - 1 : 1;
    onChange(previousPage);
  }

  render() {
    let { activePage, totalPages, ellipsis, next, prev, onChange } = this.props;
    let items = Math.ceil(totalPages);
    let list = [];
    let displayPagination = [];
    let first = 0;
    let last = items;
    let position = 0;
    let middle = false;

    if (ellipsis && items > 10) {
      if (activePage < 5) {
        last = 5;
        list.push(<li key={0} className="disabled">...</li>);
        list.push(<li key={1} onClick={this.handleItemClick.bind(this, onChange, items)}>{items}</li>);
      } else if (activePage > items - 4) {
        position = 2;
        first = items - 5;
        list.push(<li key={0} onClick={this.handleItemClick.bind(this, onChange, 1)}>1</li>);
        list.push(<li key={1} className="disabled">...</li>);
      } else {
        middle = true;
        first = activePage - 3; 
        last = activePage + 2;
        list.push(<li key={0} onClick={this.handleItemClick.bind(this, onChange, 1)}>1</li>);
        list.push(<li key={1} className="disabled">...</li>);
        list.push(<li key={2} className="disabled">...</li>);
        list.push(<li key={3} onClick={this.handleItemClick.bind(this, onChange, items)}>{items}</li>);
      }
    }

    for (let i = first; i < last; i++) {
      let className = (i + 1) === activePage ? 'active' : '';
      let item = (
        <li key={i + 3} className={className} onClick={this.handleItemClick.bind(this, onChange, i + 1)}>{i + 1}</li>
      );

      if (middle) {
        list.splice(position + i - activePage + 5, 0, item);
      } else {
        list.splice(position + i, 0, item);
      }
    }

    displayPagination.push(list);

    if (next && items > 0) {
      displayPagination.splice(0, 0, <li key={items + 1} onClick={this.handleClickPreviousButton.bind(this, onChange, activePage, items)}>«</li>);
    }
    if (prev && items > 0) {
      displayPagination.splice(displayPagination.length, 0, <li key={items + 2} onClick={this.handleClickNextButton.bind(this, onChange, activePage, items)}>»</li>);
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
  totalPages: React.PropTypes.number,
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
  totalPages: 1,
  ellipsis: true,
  next: true,
  prev: true
};

export default Pagination;
