Breadcrumb is a stateless element. Wrap it with an element holding the state for interaction.

    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          tabs: ['Root', 'Node1', 'Node2']
        };
      },

      render: function() {
        return (
          <Breadcrumb tabs={this.state.tabs} disableLast={false} />
        );
      }
    });

    <Wrap />
