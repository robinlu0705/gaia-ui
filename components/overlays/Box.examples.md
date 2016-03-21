Box is a stateless element. Wrap it with an element holding the state of show/hide for interaction.

    let BoxContent = function(props) {
      return (
        <div>
          <div style={{ marginTop: '20px' }}>Welcome to my world!!</div>
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <Button
              onClick={() => {
                props.handleClose();
              }}
            >
              Close
            </Button>
          </div>
        </div>
      );
    };

    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          showBox: false
        };
      },

      render: function() {
        return (
          <div>
            <Button style={{ width: 'auto' }}
              onClick={() => {
                this.setState({ showBox: true });
              }}
            >
              Launch
            </Button>

            <Box title="Hello" isOpened={this.state.showBox} width="40%"
              content={
                <BoxContent handleClose={() => {
                  this.setState({ showBox: false });
                }} />
              }

              onClose={() => {
                this.setState({ showBox: false });
              }}
            />
          </div>
        );
      }
    });

    <Wrap />