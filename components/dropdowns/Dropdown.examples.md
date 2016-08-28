Dropdown is a stateless element. Wrap it with an element holding the isExpanded state for interaction.

    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          isExpanded: false
        };
      },

      render: function() {
        let trigger = <Button>Trigger</Button>;

        let pane = (
          <div style={{ width: '200px', textAlign: 'center', fontWeight: 'bold', color: 'gray' }}
            onClick={() => {
              this.setState({ isExpanded: false });
            }}
          >
            <div>You can put</div>
            <div style={{ marginTop: '20px' }}>Anything</div>
            <div style={{ marginTop: '20px' }}>Here</div>
          </div>
        );

        return <Dropdown isExpanded={this.state.isExpanded} trigger={trigger} pane={pane}
          onTriggerClick={() => {
            this.setState({ isExpanded: !this.state.isExpanded });
          }}
          onOutsideClick={() => {
            if (this.state.isExpanded) {
              this.setState({ isExpanded: false });
            }
          }}
        />;
      }
    });

    <Wrap />
