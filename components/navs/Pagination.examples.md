    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          displayPage: 1 
        };
      },

      changeDisplayPage(selectedPage) {
        this.setState({
          displayPage: selectedPage
        });
      },

      render: function() {
        let totalItem = 150;
        let displayItemsNumber = 10;
        let totalPages = totalItem / displayItemsNumber;

        return (
          <div>
            <Pagination ellipsis={false} activePage={this.state.displayPage} items={totalPages} onChange={(key) => { this.changeDisplayPage(key); }} />
            <Pagination activePage={this.state.displayPage} items={totalPages} onChange={(key) => { this.changeDisplayPage(key); }} />
          </div>
        );
      }
    });

    <Wrap />
