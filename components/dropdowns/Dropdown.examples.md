Dropdown is a stateless element. Wrap it with an element holding the isExpanded state for interaction.

    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          isExpanded: false
        };
      },

      render: function() {
        let trigger = (
          <Button
            onClick={() => {
              this.setState({ isExpanded: !this.state.isExpanded });
            }}
          >
            Trigger
          </Button>
        );

        let pane = (
          <div style={{ cursor: 'pointer' }}
            onClick={() => {
              this.setState({ isExpanded: false });
            }}
          >
            <div>pane</div>
            <div>pane</div>
            <div>pane</div>
            <div>pane</div>
          </div>
        );

        return <Dropdown isExpanded={this.state.isExpanded} trigger={trigger} pane={pane} />;
      }
    });

    <Wrap />
