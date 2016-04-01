    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          displayPage: 1,
          ellipsisDisplayPage: 1
        };
      },

      changeDisplayPage(selectedPage) {
        this.setState({
          displayPage: selectedPage
        });
      },

      changeEllipsisDisplayPage(selectedPage) {
        this.setState({
          ellipsisDisplayPage: selectedPage
        });
      },


      render: function() {
        let totalItem = 150;
        let displayItemsNumber = 10;
        let pages = totalItem / displayItemsNumber;

        return (
          <div>
            <Pagination ellipsis={false} activePage={this.state.displayPage} totalPages={pages} onChange={(key) => { this.changeDisplayPage(key); }} />
            <Pagination activePage={this.state.ellipsisDisplayPage} totalPages={pages} onChange={(key) => { this.changeEllipsisDisplayPage(key); }} />
          </div>
        );
      }
    });

    <Wrap />
