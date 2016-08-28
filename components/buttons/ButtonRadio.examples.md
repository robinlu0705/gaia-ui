ButtonRadio is a stateless element.

    let style = { margin: '10px 0' };
    let options1 = ['test1', 'test2', 'test3'];
    let options2 = ['test1', 'test2', 'test3'];

    let Wrap = React.createClass({
      getInitialState: function() {
        return {
          radio1Checked: 'test1',
          radio2Checked: 'test2'
        };
      },

      render: function() {
        return (
          <div>
            <div style={style}>
              <ButtonRadio
                choices={options1}
                radioName="radio1"
                checked={this.state.radio1Checked}
                onInputChange={(newChecked) => this.setState({ radio1Checked: newChecked })}
              />
            </div>
            <div style={style}>
              <ButtonRadio
                choices={options2}
                radioName="radio2"
                checked={this.state.radio2Checked}
                disabled={['test1']}
                onInputChange={(newChecked) => this.setState({ radio2Checked: newChecked })}
              />
            </div>
          </div>
        );
      }
    });

    <Wrap />
