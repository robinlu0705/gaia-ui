import {} from './Pagination.less';
import React from 'react';

class Pagination extends React.Component {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.onChange = this.props.onChange.bind(this);
    this.state = {
      activePage: this.props.activePage,
      itemsNumber: this.props.items
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

    for (let i = 0; i < this.state.itemsNumber; i++) {
      let className = (i + 1) === this.state.activePage ? 'active' : '';
      let item = (
        <li key={i} className={className} onClick={this.handleItemClick.bind(this, i + 1)}>{i + 1}</li>
      );

      list.push(item);
    };

    if (this.state.itemsNumber > 0) {
      displayPagination.push(<li key={this.state.itemsNumber + 1} onClick={this.handleClickPreviousButton.bind(this)}>«</li>);
      displayPagination.push(list);
      displayPagination.push(<li key={this.state.itemsNumber + 2} onClick={this.handleClickNextButton.bind(this)}>»</li>);
    }
    return (
      <ul className="Gaia-navs-Pagination">
        {displayPagination}
      </ul>
    );
  }
}

Pagination.propTypes = {
  activePage: React.PropTypes.number,
  items: React.PropTypes.number,
  onChange: React.PropTypes.func
};

export default Pagination;
