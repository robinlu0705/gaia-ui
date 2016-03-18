Nav is a stateless element. Wrap it with an element holding the state of current activated tab for interaction.

    let tabs = {
      a: 'Tab_a',
      b: 'Tab_b',
      c: 'Tab_c'
    };

    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          currentTab: 'a'
        };
      },

      render: function() {
        return (
          <Nav tabs={tabs} selected={this.state.currentTab}
            onChange={(newTab) => {
              this.setState({
                currentTab: newTab
              });
            }}
          />
        );
      }
    });

    <Wrap />
